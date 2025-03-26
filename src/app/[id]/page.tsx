import ListEmpenho from "@/components/ListEmpenho";
import { empenhoMock } from "@/mocks/empenhoMock";
import { getEmpenhosByDespesaId } from "@/services/getEmpenhosByDespesaId/getEmpenhosByDespesaId.service";
import { Divider } from "antd";

interface EmpenhoProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Empenho({ params }: EmpenhoProps) {
  const { id } = await params;

  const empenhos = await getEmpenhosByDespesaId(id);

  console.log("==empenhos==>", empenhos);

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
        {/* <ButtonOpenGenericModal
          buttonLabel="Adicionar Novo Empenho"
          titleModal="Criar Novo Empenho"
        >
          <FormEmpenhoPagamento />
        </ButtonOpenGenericModal> */}
      </div>
      <Divider />
      <ListEmpenho empenho={empenhoMock} />
    </div>
  );
}
