export interface IDespesa {
  id: string;
  numeroProtocolo: string;
  credor: string;
  tipoDespesa: "OBRAS_EDIFICACAO" | "OBRAS_RODOVIAS" | "OUTROS";
  dataProtocolo: string;
  dataVencimento: string;
  valor: number;
  descricao: string;
  status: string | null;
}
