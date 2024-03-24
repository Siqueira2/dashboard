import axios from "axios";

import { IBoard } from "@/interface/board";

interface BoardResponse {
  data: IBoard[];
}

const API_URL = "https://localhost:8080";

export default async function (title: string): Promise<BoardResponse> {
  const response = await axios.post(`${API_URL}/boards`, title);
  return response;
}
