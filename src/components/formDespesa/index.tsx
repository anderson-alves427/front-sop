"use client";

import { IDespesa } from "@/interfaces/IDespesa";
import { createDespesa } from "@/services/createDespesa/createDespesa.service";
import { updateDespesa } from "@/services/updateDespesa/updateDespesa.service";
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";

const { Option } = Select;

interface FormDespesaProps {
  despesa?: IDespesa;
  onSuccess: () => void;
}

export default function FormDespesa({ despesa, onSuccess }: FormDespesaProps) {
  const [form] = Form.useForm();

  const onFinish = async (values: IDespesa) => {
    const params = {
      ...values,
      dataVencimento: dayjs(values.dataVencimento).format("YYYY-MM-DD"),
    };

    try {
      if (despesa) {
        await updateDespesa(despesa.id, params);
        onSuccess();
        return;
      }
      await createDespesa(params);
      onSuccess();
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (despesa) {
      form.setFieldsValue({
        id: despesa.id,
        credor: despesa.credor,
        tipoDespesa: despesa.tipoDespesa,
        dataVencimento: dayjs(despesa.dataVencimento),
        valor: despesa.valor,
        descricao: despesa.descricao,
        status: despesa.status,
      });
    }
  }, [despesa, form]);

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item
        name="credor"
        label="Credor da despesa"
        rules={[
          {
            required: true,
            message: "O credor da despesa é obrigatório",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Valor da despesa" name="valor">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Data do vencimento" name="dataVencimento">
        <DatePicker format="DD/MM/YYYY" required />
      </Form.Item>
      <Form.Item
        name="tipoDespesa"
        label="Tipo de despesa"
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Selecione um tipo de despesa"
          allowClear
          value={form.getFieldValue("")}
        >
          <Option value="OBRA_EDIFICACAO">Obra de edificação</Option>
          <Option value="OBRA_RODOVIAS">Obra de rodovias</Option>
          <Option value="OUTROS">Outros</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Descrição"
        name="descricao"
        rules={[{ required: true }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button type="primary" htmlType="submit">
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
}
