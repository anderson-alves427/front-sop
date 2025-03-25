export interface IDespesa {
  id: string;
  numeroProtocolo: string;
  credorDespesa: string;
  tipoDespesa: "OBRAS_EDIFICACAO" | "OBRAS_RODOVIAS" | "OUTROS";
  dataProtocolo: string;
  dataVencimento: string;
  valorDespesa: number;
  descricao: string;
  status: string;
}
