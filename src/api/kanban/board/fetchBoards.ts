import axios from "axios";

import { IBoard } from "@/interface/board";

interface BoardResponse {
  data: IBoard[];
}

const API_URL = "https://localhost:3001";

export default async function (): Promise<BoardResponse> {
  const response = await axios.get(`${API_URL}/boards`);
  return response;
}
