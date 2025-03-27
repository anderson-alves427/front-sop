"use server";

import { api } from "@/config/api";
import { revalidatePath } from "next/cache";

export async function deleteDespesa(id: string): Promise<void> {
  await api.delete("despesa/" + id);
  revalidatePath("/");
}
