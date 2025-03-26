"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

export async function deleteDespesa(id: string): Promise<void> {
  await axios.delete("http://localhost:8080/despesa/" + id);
  revalidatePath("/");
}
