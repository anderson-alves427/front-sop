"use client";

import { IDespesa } from "@/interfaces/IDespesa";
import { Space, Table, TableProps } from "antd";
import { useState } from "react";
import GenericModal from "../genericModal";
import FormDespesa from "../formDespesa";
import Link from "next/link";
import { deleteDespesa } from "@/services/deleteDespesa/deleteDespesa.service";

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

  const handleClickConfirmDeleteDespesa = async () => {
    if (!selectedDespesa) {
      console.log("Selecione uma despesa");
      setSelectedDespesa(undefined);
      return;
    }
    try {
      await deleteDespesa(selectedDespesa.id);
      setIsOpenModalDelete(false);
    } catch (error) {
      console.log(error);
    }
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
      dataIndex: "credor",
      key: "credor",
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
      dataIndex: "valor",
      key: "valor",
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
        onOk={handleClickConfirmDeleteDespesa}
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
