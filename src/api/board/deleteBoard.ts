import axios from "axios";

const API_URL = "https://localhost:8080";

export default async function (id: string) {
  await axios.delete(`${API_URL}/boards/${id}`);
}
