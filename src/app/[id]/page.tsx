import ButtonOpenGenericModal from "@/components/buttonOpenGenericModal";
import FormEmpenhoPagamento from "@/components/formEmpenhoPagamento";
import { Divider } from "antd";

export default function Empenho() {
  return (
    <div className="bg-white shadow-md rounded-lg py-3 px-2">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <p className="text-gray-400 font-semibold text-sm">
            Protocolo da despesa: <span className="text-gray-700">1555</span>
          </p>
          <p className="text-gray-400  font-semibold text-sm">
            Total de empenhos: <span className="text-gray-700">1555</span>
          </p>
        </div>
        <ButtonOpenGenericModal
          buttonLabel="Adicionar Novo Empenho"
          titleModal="Criar Novo Empenho"
        >
          <FormEmpenhoPagamento />
        </ButtonOpenGenericModal>
      </div>
      <Divider />
    </div>
  );
}
