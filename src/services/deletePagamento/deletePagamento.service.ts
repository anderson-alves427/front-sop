"use server";

import { api } from "@/config/api";
import { revalidatePath } from "next/cache";

export async function deletePagamento(
  id: string,
  despesaId: string,
  empenhoId: string
): Promise<void> {
  await api.delete("pagamento/" + id);
  revalidatePath(`${despesaId}/${empenhoId}`);
}
