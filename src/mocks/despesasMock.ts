import { IDespesa } from "@/interfaces/IDespesa";

const despesasMock: IDespesa[] = [
  {
    id: "123",
    credorDespesa: "Anderson",
    dataProtocolo: "08/07/1197",
    dataVencimento: "08/07/1197",
    descricao: "Descrição",
    numeroProtocolo: "456454.54654-54569",
    status: "teste",
    tipoDespesa: "OBRAS_EDIFICACAO",
    valorDespesa: 70,
  },
  {
    id: "656",
    credorDespesa: "Anderson",
    dataProtocolo: "08/07/1197",
    dataVencimento: "08/07/1197",
    descricao: "Descrição",
    numeroProtocolo: "456454.54654-5456",
    status: "teste",
    tipoDespesa: "OBRAS_EDIFICACAO",
    valorDespesa: 70,
  },
  {
    id: "787",
    credorDespesa: "Anderson",
    dataProtocolo: "08/07/1197",
    dataVencimento: "08/07/1197",
    descricao: "Descrição",
    numeroProtocolo: "456454.54654-54561",
    status: "teste",
    tipoDespesa: "OUTROS",
    valorDespesa: 70,
  },
];

export { despesasMock };
