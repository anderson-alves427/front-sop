import { IPagamento } from "@/interfaces/IPagamento";

export type CreatePagamentoDTO = Omit<IPagamento, "id">;
