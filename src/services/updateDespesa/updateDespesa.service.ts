"use server";

import { CreateDespesaInputDTO } from "../createDespesa/createDespesaInput.dto";
import { revalidatePath } from "next/cache";
import { api } from "@/config/api";

export async function updateDespesa(
  id: string,
  params: CreateDespesaInputDTO
): Promise<void> {
  await api.put("despesa/" + id, params);
  revalidatePath("/");
}
