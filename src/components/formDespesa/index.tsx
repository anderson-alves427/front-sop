"use client";

import { DatePicker, Form, Input, InputNumber, Select } from "antd";

const { Option } = Select;

export default function FormDespesa() {
  return (
    <Form layout="vertical">
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
          // onChange={onGenderChange}
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
    </Form>
  );
}
