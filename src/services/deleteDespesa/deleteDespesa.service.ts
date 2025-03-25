import axios from "axios";

export async function deleteDespesa(id: string): Promise<void> {
  await axios.delete("http://localhost:8080/despesa/" + id);
}
