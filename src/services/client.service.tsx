
import { IClient } from "../models/client.interface";
import axios from "axios";
const url: string = process.env.REACT_APP_BASE_URL!;

export const getClients = async (): Promise<IClient[]> => {
  try {
    const response = await axios.get<IClient[]>(url);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}