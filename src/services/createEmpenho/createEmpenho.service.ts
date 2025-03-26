"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";
import { CreateEmpenhoDTO } from "./createEmpenho.dto";

export async function createEmpenho(params: CreateEmpenhoDTO): Promise<void> {
  await axios.post("http://localhost:8080/empenho", params);
  revalidatePath("/" + params.despesaId);
}
