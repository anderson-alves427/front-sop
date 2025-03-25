"use client";

import { IDespesa } from "@/interfaces/IDespesa";
import { Button, DatePicker, Form, Input, InputNumber } from "antd";
import { useEffect } from "react";

interface FormDespesaProps {
  params?: {
    id: string;
    numero: string;
    data: string;
    valor: number;
    observacao: string;
  };
}

export default function FormEmpenhoPagamento({ params }: FormDespesaProps) {
  const [form] = Form.useForm();

  const onFinish = (values: IDespesa) => {
    console.log(values.valorDespesa);
  };

  useEffect(() => {
    if (params) {
      form.setFieldsValue({
        id: params.id,
        numero: params.numero,
        data: params.data,
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
      {/* <Form.Item label="Data" name="data">
        <DatePicker />
      </Form.Item> */}
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
