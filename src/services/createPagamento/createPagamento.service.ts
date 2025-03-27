"use server";

import { CreatePagamentoDTO } from "./createPagamento.dto";
import { revalidatePath } from "next/cache";
import { api } from "@/config/api";

export async function createPagamento(
  params: CreatePagamentoDTO,
  despesaId: string
): Promise<void> {
  await api.post("pagamento", params);
  revalidatePath(`/${despesaId}/${params.empenhoId}`);
}
