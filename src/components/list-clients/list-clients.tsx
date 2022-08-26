
import { useEffect, useState } from "react"
import { getClients } from "../../services/client.service"
import { ClientCard } from "../client-card/client-card"
import { IClient } from "../../models/client.interface";
import { ClientContainer } from './list-clients.style';

export const ListClients = () => {
  const [clients, setClients] = useState<[] | IClient[]>([]);

  useEffect(() => {
    getClients().then(response => setClients(response))
  }, [])
  
  return (
    <ClientContainer>
      {clients.map(client => (<ClientCard key={client.id} {...client} />))}
    </ClientContainer>
  )
}