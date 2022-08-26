import { ListClients } from "../../components/list-clients/list-clients"
import { TitleContainer } from "./list-clients-page.style"

export const ListClientsPage = () =>{
    return (
        <>
        <TitleContainer><h1>Listar Clientes</h1></TitleContainer>
        <ListClients />
        </>
    )
}