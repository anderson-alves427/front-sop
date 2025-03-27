"use server";

import { api } from "@/config/api";
import { revalidatePath } from "next/cache";

export async function updatePagamento(
  despesaId: string,
  id: string,
  params: { observacao: string; dataPagamento: string; empenhoId: string }
): Promise<void> {
  await api.put("pagamento/" + id, params);
  revalidatePath(`${despesaId}/${params.empenhoId}`);
}
