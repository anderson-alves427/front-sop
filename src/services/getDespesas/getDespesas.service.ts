import { api } from "@/config/api";
import { IDespesa } from "@/interfaces/IDespesa";

export async function getDespesas(): Promise<IDespesa[]> {
  try {
    const response = await api.get("despesa");
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
