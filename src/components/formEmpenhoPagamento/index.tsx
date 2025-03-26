"use client";

import { CreateEmpenhoDTO } from "@/services/createEmpenho/createEmpenho.dto";
import { createEmpenho } from "@/services/createEmpenho/createEmpenho.service";
import { Button, DatePicker, Form, Input, InputNumber } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";

type ParamsPagamentoEmpenho = {
  id: string;
  numero: string;
  data: string;
  valor: number;
  observacao: string;
};

interface FormDespesaProps {
  params?: ParamsPagamentoEmpenho;
  onSuccess: () => void;
  despesaId?: string;
  type: "pagamento" | "empenho";
  empenhoId?: string;
}

export default function FormEmpenhoPagamento({
  params,
  onSuccess,
  despesaId,
  type,
  empenhoId,
}: FormDespesaProps) {
  const [form] = Form.useForm();

  const onFinish = async (values: Omit<ParamsPagamentoEmpenho, "id">) => {
    try {
      if (type === "empenho" && despesaId) {
        const paramsEmpenho: CreateEmpenhoDTO = {
          dataEmpenho: dayjs(values.data).format("YYYY-MM-DD"),
          despesaId: despesaId,
          numeroEmpenho: values.numero,
          observacao: values.observacao,
          valorEmpenho: values.valor,
        };
        if (params) {
          // await updateDespesa(despesa.id, params);
          // onSuccess();
          // return;
        }

        await createEmpenho(paramsEmpenho);
      }

      onSuccess();
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (params) {
      form.setFieldsValue({
        id: params.id,
        numero: params.numero,
        data: dayjs(params.data),
        valor: params.valor,
        observacao: params.observacao,
      });
    }
  }, [params, form]);

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item label="Valor" name="valor">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Data" name="data">
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Observação"
        name="observacao"
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
