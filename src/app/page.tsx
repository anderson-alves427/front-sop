import AddNewDespesa from "@/components/addNewDespesa";
import ListDespesa from "@/components/listDespesa";
import { getDespesas } from "@/services/getDespesas/getDespesas.service";

import { Divider } from "antd";

export default async function Despesa() {
  const despesas = await getDespesas();

  return (
    <div className="bg-white shadow-md rounded-lg py-3 px-2">
      <div className="flex justify-between">
        <p className="text-gray-400  font-semibold">
          Total de despesas:{" "}
          <span className="text-gray-700">{despesas.length}</span>
        </p>
        <AddNewDespesa
          buttonLabel="Adicionar nova despesa"
          titleModal="Criar Nova Despesa"
        />
      </div>
      <Divider />
      <ListDespesa despesas={despesas || []} />
    </div>
  );
}
