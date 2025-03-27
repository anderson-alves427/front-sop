import { api } from "@/config/api";
import { IPagamento } from "@/interfaces/IPagamento";

export async function getPagamentosByEmepenhoId(
  id: string
): Promise<IPagamento[]> {
  const response = await api.get("pagamento/" + id);
  return response.data;
}
