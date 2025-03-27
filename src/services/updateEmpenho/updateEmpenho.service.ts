"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export async function updateEmpenho(
  id: string,
  params: { observacao: string; dataEmpenho: string; despesaId: string }
): Promise<void> {
  await axios.put("http://localhost:8080/empenho/" + id, params);
  revalidatePath("/" + params.despesaId);
}
