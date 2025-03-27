"use server";

import { CreateDespesaInputDTO } from "./createDespesaInput.dto";
import { revalidatePath } from "next/cache";
import { api } from "@/config/api";

export async function createDespesa(
  params: CreateDespesaInputDTO
): Promise<void> {
  await api.post("despesa", params);
  revalidatePath("/");
}
