import { ListClients } from "../../components/list-clients"
import { TitleContainer } from "./styles"

export const ListClientsPage = () =>{
    return (
        <>
        <TitleContainer><h1>Listar Clientes</h1></TitleContainer>
        <ListClients />
        </>
    )
}