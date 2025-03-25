"use client";

import { IDespesa } from "@/interfaces/IDespesa";
import { Space, Table, TableProps } from "antd";

interface ListDespesaProps {
  despesas: IDespesa[];
}

export default function ListDespesa({ despesas }: ListDespesaProps) {
  const handleClickEditDespesa = (id: string) => {
    console.log("Edit despesa", id);
  };

  const hadndleClickDeleteDespesa = (id: string) => {
    console.log("Delete despesa", id);
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
      dataIndex: "statusDespesa",
      key: "statusDespesa",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ações",
      key: "action",
      render: (_, { id }) => (
        <Space size="middle">
          <a>Empenhos</a>
          <a onClick={() => handleClickEditDespesa(id)}>Editar</a>
          <a onClick={() => hadndleClickDeleteDespesa(id)}>Deletar</a>
        </Space>
      ),
    },
  ];

  return (
    <Table<IDespesa>
      columns={columns}
      dataSource={despesas}
      rowKey="numeroProtocolo"
    />
  );
}
