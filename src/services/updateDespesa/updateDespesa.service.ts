import axios from "axios";
import { CreateDespesaInputDTO } from "../createDespesa/createDespesaInput.dto";

export async function updateDespesa(
  id: string,
  params: CreateDespesaInputDTO
): Promise<void> {
  await axios.put("http://localhost:8080/despesa/" + id, params);
}
