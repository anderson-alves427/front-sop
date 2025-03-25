"use client";

import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";

const { Option } = Select;

export default function FormDespesa() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

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
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="OBRA_EDIFICACAO">Obra de edificação</Option>
          <Option value="OBRA_RODOVIAS">Obra de rodovias</Option>
          <Option value="OUTROS">Outros</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Data do protocolo" name="dataProtocolo">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Data do vencimento" name="dataVencimento">
        <DatePicker />
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
