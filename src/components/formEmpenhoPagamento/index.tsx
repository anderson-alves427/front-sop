"use client";

import { CreateEmpenhoDTO } from "@/services/createEmpenho/createEmpenho.dto";
import { createEmpenho } from "@/services/createEmpenho/createEmpenho.service";
import { CreatePagamentoDTO } from "@/services/createPagamento/createPagamento.dto";
import { createPagamento } from "@/services/createPagamento/createPagamento.service";
import { updateEmpenho } from "@/services/updateEmpenho/updateEmpenho.service";
import { updatePagamento } from "@/services/updatePagamento.service";
import { Button, DatePicker, Flex, Form, Input, InputNumber } from "antd";
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
    console.log(type, despesaId, empenhoId);
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
          await updateEmpenho(params.id, {
            dataEmpenho: paramsEmpenho.dataEmpenho,
            observacao: paramsEmpenho.observacao,
            despesaId,
          });
          onSuccess();
          return;
        }

        await createEmpenho(paramsEmpenho);
        onSuccess();
        return;
      }

      if (type === "pagamento" && empenhoId && despesaId) {
        const paramsPagamento: CreatePagamentoDTO = {
          dataPagamento: dayjs(values.data).format("YYYY-MM-DD"),
          empenhoId: empenhoId,
          numeroPagamento: values.numero,
          observacao: values.observacao,
          valorPagamento: values.valor,
        };
        if (params) {
          await updatePagamento(despesaId, params.id, paramsPagamento);
          onSuccess();
          return;
        }

        await createPagamento(paramsPagamento, despesaId);
        onSuccess();
        return;
      }
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
      <Flex gap={10}>
        {!params && (
          <Form.Item label="Valor" name="valor">
            <InputNumber />
          </Form.Item>
        )}

        <Form.Item label="Data" name="data">
          <DatePicker />
        </Form.Item>
      </Flex>
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
