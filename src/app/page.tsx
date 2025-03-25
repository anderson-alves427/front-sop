import AddNewDespesa from "@/components/addNewDespesa";
import ListDespesa from "@/components/listDespesa";
import { despesasMock } from "@/mocks/despesasMock";
import { Divider } from "antd";
export default function Home() {
  return (
    <div className="bg-white shadow-md rounded-lg py-3 px-2">
      <div className="flex justify-between">
        <p className="text-gray-400  font-semibold">
          Total de despesas: <span className="text-gray-700">1555</span>
        </p>
        <AddNewDespesa />
      </div>
      <Divider />
      <ListDespesa despesas={despesasMock} />
    </div>
  );
}
