import AddNewEmpenhoPagamento from "@/components/addNewEmpenhoPagamento";
import { getPagamentosByEmepenhoId } from "@/services/getPagamentosByEmpenhoId/getPagamentosByEmpenhoId.service";
import { Divider } from "antd";

interface EmpenhoProps {
  params: Promise<{
    despesaId: string;
    empenhoId: string;
  }>;
}

export default async function Pagamento({ params }: EmpenhoProps) {
  const { despesaId, empenhoId } = await params;

  const pagamentos = await getPagamentosByEmepenhoId(empenhoId);

  return (
    <div className="bg-white shadow-md rounded-lg py-3 px-2">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <p className="text-gray-400 font-semibold text-sm">
            Id da despesa: <span className="text-gray-700">{despesaId}</span>
          </p>
          <p className="text-gray-400 font-semibold text-sm">
            Id do empenho: <span className="text-gray-700">{despesaId}</span>
          </p>
          <p className="text-gray-400  font-semibold text-sm">
            Total de pagamentos:{" "}
            <span className="text-gray-700">{pagamentos.length}</span>
          </p>
        </div>
        <AddNewEmpenhoPagamento
          buttonLabel="Adicionar Novo Pagamento"
          title="Criar Novo Pagamento"
          despesaId={despesaId}
          type="empenho"
        />
      </div>
      <Divider />
      {/* <ListEmpenho empenho={pagamentos} despesaId={despesaId} /> */}
    </div>
  );
}
