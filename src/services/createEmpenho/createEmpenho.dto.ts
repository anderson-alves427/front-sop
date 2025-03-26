import { IEmpenho } from "@/interfaces/IEmpenho";

export type CreateEmpenhoDTO = Omit<IEmpenho, "id">;
