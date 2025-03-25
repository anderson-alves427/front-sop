import ButtonOpenGenericModal from "@/components/buttonOpenGenericModal";
import FormDespesa from "@/components/formDespesa";
import ListDespesa from "@/components/listDespesa";
import { despesasMock } from "@/mocks/despesasMock";
import { Divider } from "antd";

export default function Despesa() {
  return (
    <div className="bg-white shadow-md rounded-lg py-3 px-2">
      <div className="flex justify-between">
        <p className="text-gray-400  font-semibold">
          Total de despesas: <span className="text-gray-700">1555</span>
        </p>
        <ButtonOpenGenericModal
          buttonLabel="Adicionar nova despesa"
          titleModal="Criar Nova Despesa"
        >
          <FormDespesa />
        </ButtonOpenGenericModal>
      </div>
      <Divider />
      <ListDespesa despesas={despesasMock} />
    </div>
  );
}
