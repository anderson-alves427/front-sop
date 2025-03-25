"use client";

import { IDespesa } from "@/interfaces/IDespesa";
import { Space, Table, TableProps } from "antd";
import { useState } from "react";
import GenericModal from "../genericModal";
import FormDespesa from "../formDespesa";
import Link from "next/link";

interface ListDespesaProps {
  despesas: IDespesa[];
}

export default function ListDespesa({ despesas }: ListDespesaProps) {
  const [selectedDespesa, setSelectedDespesa] = useState<IDespesa>();
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);

  const handleClickEditDespesa = (despesa: IDespesa) => {
    setSelectedDespesa(despesa);
    setIsOpenModalEdit(true);
  };

  const handleClickDeleteDespesa = (despesa: IDespesa) => {
    setSelectedDespesa(despesa);
    setIsOpenModalDelete(true);
  };

  const columns: TableProps<IDespesa>["columns"] = [
    {
      title: "Número de protocolo",
      dataIndex: "numeroProtocolo",
      key: "numeroProtocolo",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Credor",
      dataIndex: "credorDespesa",
      key: "credorDespesa",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tipo",
      dataIndex: "tipoDespesa",
      key: "tipoDespesa",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Valor",
      dataIndex: "valorDespesa",
      key: "valorDespesa",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ações",
      key: "action",
      render: (_, row) => (
        <Space size="middle">
          <Link href={row.id}>Empenho</Link>
          <a onClick={() => handleClickEditDespesa(row)}>Editar</a>
          <a onClick={() => handleClickDeleteDespesa(row)}>Deletar</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table<IDespesa>
        columns={columns}
        dataSource={despesas}
        rowKey="numeroProtocolo"
      />

      <GenericModal
        title="Deletar despesa"
        isModalOpen={isOpenModalDelete}
        handleClose={() => setIsOpenModalDelete(false)}
      >
        <div>{`Você tem certeza que deseja deletar a depesa de número de protocolo ${
          selectedDespesa?.numeroProtocolo || ""
        }?`}</div>
      </GenericModal>
      <GenericModal
        handleClose={() => setIsOpenModalEdit(false)}
        isModalOpen={isOpenModalEdit}
        title="Editar"
        footer
      >
        <FormDespesa despesa={selectedDespesa} />
      </GenericModal>
    </>
  );
}
