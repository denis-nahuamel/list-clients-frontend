import { useEffect, useState } from "react"
import { getClients } from "../services/client.service"
import { ClientCard } from "./client-card"
import { IClient } from "../models/client.interface";

export const ListClients = () =>{
  const [clients, setClients] = useState<[] | IClient[]>([]);

  useEffect(() => {
    getClients().then(response => setClients(response))
  }, [])
  
  return (
    <div>
        {clients.map(client=>(<ClientCard key={client.id} {...client} />))}
    </div>
  )
}