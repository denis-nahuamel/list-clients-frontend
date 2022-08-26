import { IClient } from "../models/client.interface"
export const ClientCard = (client:IClient) =>{
    return (
        <div>
            <h3>{client.nombres}</h3>
        </div>
    )
}