import { IPagamento } from "@/interfaces/IPagamento";
import axios from "axios";

export async function getPagamentosByEmepenhoId(
  id: string
): Promise<IPagamento[]> {
  const response = await axios.get("http://localhost:8080/pagamento/" + id);
  return response.data;
}
