import axios from "axios";
import { CreateDespesaInputDTO } from "./createDespesaInput.dto";

export async function createDespesa(
  params: CreateDespesaInputDTO
): Promise<void> {
  await axios.post("http://localhost:8080/despesa", params);
}
