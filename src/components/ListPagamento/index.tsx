"use client";

import { Space, Table, TableProps } from "antd";
import { useState } from "react";
import GenericModal from "../genericModal";
import { deletePagamento } from "@/services/deletePagamento/deletePagamento.service";
import dayjs from "dayjs";
import { IPagamento } from "@/interfaces/IPagamento";
import FormEmpenhoPagamento from "../formEmpenhoPagamento";

interface ListPagamentoProps {
  pagamento: IPagamento[];
  empenhoId: string;
  despesaId: string;
}

export default function ListPagamento({
  pagamento,
  empenhoId,
  despesaId,
}: ListPagamentoProps) {
  const [selectedPagamento, setSelectedPagamento] = useState<IPagamento>();
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);

  const handleClickEditPagamento = (empenho: IPagamento) => {
    setSelectedPagamento(empenho);
    setIsOpenModalEdit(true);
  };

  const handleClickDeletePagamento = (empenho: IPagamento) => {
    setSelectedPagamento(empenho);
    setIsOpenModalDelete(true);
  };

  const handleClickConfirmDeletePagamento = async () => {
    if (!selectedPagamento) {
      console.log("Selecione uma opção para deletar");
      setSelectedPagamento(undefined);
      return;
    }
    try {
      await deletePagamento(selectedPagamento.id, despesaId, empenhoId);
      setIsOpenModalDelete(false);
    } catch (error) {
      console.log(error);
    }
  };

  const columns: TableProps<IPagamento>["columns"] = [
    {
      title: "Número do pagamento",
      dataIndex: "numeroPagamento",
      key: "numeroPagamento",
      render: (text) => <p className="text-gray-600">{text}</p>,
    },
    {
      title: "Valor",
      dataIndex: "valorPagamento",
      key: "valorPagamento",
      render: (text) => <p className="text-gray-600">{text}</p>,
    },
    {
      title: "Data do Pagamento",
      dataIndex: "dataPagamento",
      key: "dataPagamento",
      render: (text) => <a>{dayjs(text).format("DD/MM/YYYY")}</a>,
    },
    {
      title: "Observacao",
      dataIndex: "observacao",
      key: "observacao",
      render: (text) => <p className="text-gray-600">{text}</p>,
    },

    {
      title: "Ações",
      key: "action",
      render: (_, row) => (
        <Space size="middle">
          <a onClick={() => handleClickEditPagamento(row)}>Editar</a>
          <a onClick={() => handleClickDeletePagamento(row)}>Deletar</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table<IPagamento>
        columns={columns}
        dataSource={pagamento}
        rowKey="numeroPagamento"
      />

      <GenericModal
        title="Deletar pagamento"
        isModalOpen={isOpenModalDelete}
        handleClose={() => setIsOpenModalDelete(false)}
        onOk={handleClickConfirmDeletePagamento}
      >
        <div>{`Você tem certeza que deseja deletar o pagamento de número ${
          selectedPagamento?.numeroPagamento || ""
        }?`}</div>
      </GenericModal>
      <GenericModal
        handleClose={() => setIsOpenModalEdit(false)}
        isModalOpen={isOpenModalEdit}
        title="Editar"
        footer
      >
        <FormEmpenhoPagamento
          params={
            selectedPagamento
              ? {
                  id: selectedPagamento?.id,
                  data: selectedPagamento?.dataPagamento,
                  numero: selectedPagamento?.numeroPagamento,
                  observacao: selectedPagamento?.observacao,
                  valor: selectedPagamento?.valorPagamento,
                }
              : undefined
          }
          type="pagamento"
          empenhoId={empenhoId}
          despesaId={despesaId}
          onSuccess={() => {
            setIsOpenModalEdit(false);
            setSelectedPagamento(undefined);
          }}
        />
      </GenericModal>
    </>
  );
}
