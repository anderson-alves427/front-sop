"use server";
import axios from "axios";
import { CreateDespesaInputDTO } from "../createDespesa/createDespesaInput.dto";
import { revalidatePath } from "next/cache";

export async function updateDespesa(
  id: string,
  params: CreateDespesaInputDTO
): Promise<void> {
  await axios.put("http://localhost:8080/despesa/" + id, params);
  revalidatePath("/");
}
