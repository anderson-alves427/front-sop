import { IEmpenho } from "@/interfaces/IEmpenho";
import axios from "axios";

export async function getEmpenhosByDespesaId(id: string): Promise<IEmpenho[]> {
  const response = await axios.get("http://localhost:8080/empenho/" + id);
  return response.data;
}
