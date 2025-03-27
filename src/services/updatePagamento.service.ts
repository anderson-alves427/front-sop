"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export async function updatePagamento(
  despesaId: string,
  id: string,
  params: { observacao: string; dataPagamento: string; empenhoId: string }
): Promise<void> {
  await axios.put("http://localhost:8080/pagamento/" + id, params);
  revalidatePath(`${despesaId}/${params.empenhoId}`);
}
