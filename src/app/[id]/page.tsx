import AddNewEmpenhoPagamento from "@/components/addNewEmpenhoPagamento";
import ListEmpenho from "@/components/ListEmpenho";
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

  return (
    <div className="bg-white shadow-md rounded-lg py-3 px-2">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <p className="text-gray-400 font-semibold text-sm">
            Protocolo da despesa: <span className="text-gray-700">1555</span>
          </p>
          <p className="text-gray-400  font-semibold text-sm">
            Total de empenhos:{" "}
            <span className="text-gray-700">{empenhos.length}</span>
          </p>
        </div>
        <AddNewEmpenhoPagamento
          buttonLabel="Adicionar Novo Empenho"
          title="Criar Novo Empenho"
          despesaId={id}
          type="empenho"
        />
      </div>
      <Divider />
      <ListEmpenho empenho={empenhos} />
    </div>
  );
}
