"use server";

import axios from "axios";
import { CreatePagamentoDTO } from "./createPagamento.dto";
import { revalidatePath } from "next/cache";

export async function createPagamento(
  params: CreatePagamentoDTO,
  despesaId: string
): Promise<void> {
  await axios.post("http://localhost:8080/pagamento", params);
  revalidatePath(`/${despesaId}/${params.empenhoId}`);
}
