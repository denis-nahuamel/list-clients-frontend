
import { useEffect, useState } from "react"
import { getClients } from "../../services/client.service"
import { ClientCard } from "../client-card"
import { IClient } from "../../models/client.interface";
import { ClientContainer } from './styles';

export const ListClients = () => {
  const [clients, setClients] = useState<[] | IClient[]>([]);

  useEffect(() => {
    getClients().then(data => setClients(data))
  }, [])
  
  return (
    <ClientContainer>
      {clients.map(client => (<ClientCard key={client.id} {...client} />))}
    </ClientContainer>
  )
}