"use client";

import { IDespesa } from "@/interfaces/IDespesa";
import { Space, Table, TableProps, Tooltip } from "antd";
import { useState } from "react";
import GenericModal from "../genericModal";
import FormDespesa from "../formDespesa";
import Link from "next/link";
import { deleteDespesa } from "@/services/deleteDespesa/deleteDespesa.service";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

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
      render: (text) => <p className="text-gray-600">{text}</p>,
    },
    {
      title: "Credor",
      dataIndex: "credor",
      key: "credor",
      render: (text) => <p className="text-gray-600">{text}</p>,
    },
    {
      title: "Tipo",
      dataIndex: "tipoDespesa",
      key: "tipoDespesa",
      render: (text) => <p className="text-gray-600">{text.toLowerCase()}</p>,
    },
    {
      title: "Valor",
      dataIndex: "valor",
      key: "valor",
      render: (text) => <p className="text-gray-600">{text}</p>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => <p className="text-gray-600">{text.toLowerCase()}</p>,
    },
    {
      title: "Ações",
      key: "action",
      render: (_, row) => (
        <Space size="middle">
          <Tooltip title="Empenhos">
            <Link href={row.id}>
              <CgDetailsMore size={20} />
            </Link>
          </Tooltip>

          <Tooltip title="Editar">
            <MdOutlineEdit
              onClick={() => handleClickEditDespesa(row)}
              size={20}
            />
          </Tooltip>

          <Tooltip title="Apagar">
            <MdOutlineDelete
              onClick={() => handleClickDeleteDespesa(row)}
              size={20}
              color="red"
            />
          </Tooltip>
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
        pagination={false}
        className="bg-red-300 rounded-2xl"
        // onHeaderRow={}
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
        <FormDespesa
          despesa={selectedDespesa}
          onSuccess={() => setIsOpenModalEdit(false)}
        />
      </GenericModal>
    </>
  );
}
