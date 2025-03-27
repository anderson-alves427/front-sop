import { api } from "@/config/api";
import { IEmpenho } from "@/interfaces/IEmpenho";

export async function getEmpenhosByDespesaId(id: string): Promise<IEmpenho[]> {
  const response = await api.get("empenho/" + id);
  return response.data;
}
