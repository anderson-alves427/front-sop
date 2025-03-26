export interface IPagamento {
  id: string;
  numeroPagamento: string;
  dataPagamento: string;
  valorPagamento: number;
  observacao: string;
  empenhoId: string;
}
