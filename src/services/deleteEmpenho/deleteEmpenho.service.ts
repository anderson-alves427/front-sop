"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export async function deleteEmpenho(
  id: string,
  despesaId: string
): Promise<void> {
  await axios.delete("http://localhost:8080/empenho/" + id);
  revalidatePath("/" + despesaId);
}
