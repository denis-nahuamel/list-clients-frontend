import { IClient } from "../models/client.interface";
import axios from "axios";
export const getClients = async ():Promise<IClient[]> =>  {
    try {
    const url = "http://localhost:8083";
    const response = await axios.get<IClient[]>(url);
    return response.data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }