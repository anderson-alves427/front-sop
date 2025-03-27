"use client";

import { IEmpenho } from "@/interfaces/IEmpenho";
import { Space, Table, TableProps, Tooltip } from "antd";
import Link from "next/link";
import { useState } from "react";
import GenericModal from "../genericModal";
import FormEmpenhoPagamento from "../formEmpenhoPagamento";
import { deleteEmpenho } from "@/services/deleteEmpenho/deleteEmpenho.service";
import dayjs from "dayjs";
import { CgDetailsMore } from "react-icons/cg";
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

interface ListEmpenhoProps {
  empenho: IEmpenho[];
  despesaId: string;
}

export default function ListEmpenho({ empenho, despesaId }: ListEmpenhoProps) {
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

  const handleClickConfirmDeleteEmpenho = async () => {
    if (!selectedEmpenho) {
      console.log("Selecione um empenho");
      setSelectedEmpenho(undefined);
      return;
    }
    try {
      await deleteEmpenho(selectedEmpenho.id, despesaId);
      setIsOpenModalDelete(false);
    } catch (error) {
      console.log(error);
    }
  };

  const columns: TableProps<IEmpenho>["columns"] = [
    {
      title: "Número do empenho",
      dataIndex: "numeroEmpenho",
      key: "numeroEmpenho",
      render: (text) => <p className="text-gray-600">{text}</p>,
    },
    {
      title: "Valor",
      dataIndex: "valorEmpenho",
      key: "valorEmpenho",
      render: (text) => <p className="text-gray-600">{text}</p>,
    },
    {
      title: "Data do Empenho",
      dataIndex: "dataEmpenho",
      key: "dataEmpenho",
      render: (text) => (
        <p className="text-gray-600">{dayjs(text).format("DD/MM/YYYY")}</p>
      ),
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
          <Tooltip title="Pagamentos">
            <Link href={`${despesaId}/${row.id}`}>
              <CgDetailsMore size={20} />
            </Link>
          </Tooltip>

          <Tooltip title="Editar">
            <MdOutlineEdit
              onClick={() => handleClickEditEmpenho(row)}
              size={20}
            />
          </Tooltip>

          <Tooltip title="Apagar">
            <MdOutlineDelete
              onClick={() => handleClickDeleteEmpenho(row)}
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
      <Table<IEmpenho>
        columns={columns}
        dataSource={empenho}
        rowKey="numeroEmpenho"
        pagination={false}
      />

      <GenericModal
        title="Deletar empenho"
        isModalOpen={isOpenModalDelete}
        handleClose={() => setIsOpenModalDelete(false)}
        onOk={handleClickConfirmDeleteEmpenho}
      >
        <div>{`Você tem certeza que deseja deletar o empenho de número ${
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
                  data: selectedEmpenho?.dataEmpenho,
                  numero: selectedEmpenho?.numeroEmpenho,
                  observacao: selectedEmpenho?.observacao,
                  valor: selectedEmpenho?.valorEmpenho,
                }
              : undefined
          }
          despesaId={despesaId}
          type="empenho"
          onSuccess={() => {
            setIsOpenModalEdit(false);
            setSelectedEmpenho(undefined);
          }}
        />
      </GenericModal>
    </>
  );
}
