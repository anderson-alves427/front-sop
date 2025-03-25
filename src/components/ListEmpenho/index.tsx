"use client";

import { IEmpenho } from "@/interfaces/IEmpenho";
import { Space, Table, TableProps } from "antd";
import Link from "next/link";
import { useState } from "react";
import GenericModal from "../genericModal";
import FormEmpenhoPagamento from "../formEmpenhoPagamento";

interface ListEmpenhoProps {
  empenho: IEmpenho[];
}

export default function ListEmpenho({ empenho }: ListEmpenhoProps) {
  const [selectedEmpenho, setSelectedEmpenho] = useState<IEmpenho>();
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);

  const handleClickEditEmpenho = (empenho: IEmpenho) => {
    setSelectedEmpenho(empenho);
    setIsOpenModalEdit(true);
  };

  const handleClickDeleteEmpenho = (empenho: IEmpenho) => {
    setSelectedEmpenho(empenho);
    setIsOpenModalDelete(true);
  };

  const columns: TableProps<IEmpenho>["columns"] = [
    {
      title: "Número do empenho",
      dataIndex: "numeroEmpenho",
      key: "numeroEmpenho",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Valor",
      dataIndex: "valorEmpenho",
      key: "valorEmpenho",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Data do Empenho",
      dataIndex: "tipoEmpenho",
      key: "tipoEmpenho",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Observacao",
      dataIndex: "observacao",
      key: "observacao",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Ações",
      key: "action",
      render: (_, row) => (
        <Space size="middle">
          <Link href={row.id}>Empenho</Link>
          <a onClick={() => handleClickEditEmpenho(row)}>Editar</a>
          <a onClick={() => handleClickDeleteEmpenho(row)}>Deletar</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table<IEmpenho>
        columns={columns}
        dataSource={empenho}
        rowKey="numeroEmpenho"
      />

      <GenericModal
        title="Deletar empenho"
        isModalOpen={isOpenModalDelete}
        handleClose={() => setIsOpenModalDelete(false)}
      >
        <div>{`Você tem certeza que deseja deletar a depesa de número de empenho ${
          selectedEmpenho?.numeroEmpenho || ""
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
            selectedEmpenho
              ? {
                  id: selectedEmpenho?.id,
                  data: selectedEmpenho?.dataEmepenho,
                  numero: selectedEmpenho?.numeroEmpenho,
                  observacao: selectedEmpenho?.observacao,
                  valor: selectedEmpenho?.valorEmpenho,
                }
              : undefined
          }
        />
      </GenericModal>
    </>
  );
}
