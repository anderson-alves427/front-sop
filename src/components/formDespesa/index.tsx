"use client";

import { IDespesa } from "@/interfaces/IDespesa";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { useEffect } from "react";

const { Option } = Select;

interface FormDespesaProps {
  despesa?: IDespesa;
}

export default function FormDespesa({ despesa }: FormDespesaProps) {
  const [form] = Form.useForm();

  const onFinish = (values: IDespesa) => {
    console.log(values.valorDespesa);
  };

  useEffect(() => {
    if (despesa) {
      form.setFieldsValue({
        id: despesa.id,
        numeroProtocolo: despesa.numeroProtocolo,
        credorDespesa: despesa.credorDespesa,
        tipoDespesa: despesa.tipoDespesa,
        dataProtocolo: despesa.dataProtocolo,
        dataVencimento: despesa.dataVencimento,
        valorDespesa: despesa.valorDespesa,
        descricao: despesa.descricao,
        status: despesa.status,
      });
    }
  }, [despesa, form]);

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item
        name="numeroProtocolo"
        label="Número do protocolo"
        rules={[
          { required: true, message: "Número do protocolo é obrigatório" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="credorDespesa"
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
      <Form.Item label="Valor da despesa" name="valorDespesa">
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="tipoDespesa"
        label="Tipo de despesa"
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Selecione um tipo de despesa"
          allowClear
          value={form.getFieldValue("tipoDespesa")}
        >
          <Option value="OBRA_EDIFICACAO">Obra de edificação</Option>
          <Option value="OBRA_RODOVIAS">Obra de rodovias</Option>
          <Option value="OUTROS">Outros</Option>
        </Select>
      </Form.Item>
      {/* <Form.Item label="Data do protocolo" name="dataProtocolo">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Data do vencimento" name="dataVencimento">
        <DatePicker />
      </Form.Item> */}
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
