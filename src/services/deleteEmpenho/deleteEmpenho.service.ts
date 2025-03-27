"use server";

import { api } from "@/config/api";
import { revalidatePath } from "next/cache";

export async function deleteEmpenho(
  id: string,
  despesaId: string
): Promise<void> {
  await api.delete("empenho/" + id);
  revalidatePath("/" + despesaId);
}
