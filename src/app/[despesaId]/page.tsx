import AddNewEmpenhoPagamento from "@/components/addNewEmpenhoPagamento";
import ListEmpenho from "@/components/ListEmpenho";
import { getEmpenhosByDespesaId } from "@/services/getEmpenhosByDespesaId/getEmpenhosByDespesaId.service";
import { Divider } from "antd";

interface EmpenhoProps {
  params: Promise<{
    despesaId: string;
  }>;
}

export default async function Empenho({ params }: EmpenhoProps) {
  const { despesaId } = await params;

  const empenhos = await getEmpenhosByDespesaId(despesaId);

  return (
    <div className="bg-white shadow-md rounded-lg py-3 px-2">
      <div className="flex justify-between">
        <div className="flex gap-2 flex-col">
          <p className="text-gray-400 font-semibold text-sm">
            Identificador da despesa:{" "}
            <span className="text-gray-700">{despesaId}</span>
          </p>
          <p className="text-gray-400  font-semibold text-sm">
            Total de empenhos:{" "}
            <span className="text-gray-700">{empenhos.length}</span>
          </p>
        </div>
        <AddNewEmpenhoPagamento
          buttonLabel="Adicionar Novo Empenho"
          title="Criar Novo Empenho"
          despesaId={despesaId}
          type="empenho"
        />
      </div>
      <Divider />
      <ListEmpenho empenho={empenhos} despesaId={despesaId} />
    </div>
  );
}
