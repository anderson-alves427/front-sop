import { IDespesa } from "@/interfaces/IDespesa";
import axios from "axios";

export async function getDespesas(): Promise<IDespesa[]> {
  const response = await axios.get("http://localhost:8080/despesa");
  return response.data;
}
