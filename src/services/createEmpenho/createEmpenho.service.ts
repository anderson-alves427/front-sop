"use server";

import { revalidatePath } from "next/cache";
import { CreateEmpenhoDTO } from "./createEmpenho.dto";
import { api } from "@/config/api";

export async function createEmpenho(params: CreateEmpenhoDTO): Promise<void> {
  await api.post("empenho", params);
  revalidatePath("/" + params.despesaId);
}
