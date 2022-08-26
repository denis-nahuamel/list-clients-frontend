/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { IClient } from "../../models/client.interface"
import { fDirRow } from "../../styles/general"
import { CardContainer, RowContainer } from "./client-card.style"

export const ClientCard = (client:IClient) =>{
    return (
        <CardContainer>
            <div>{client.nombres}</div>
            <RowContainer>
                <div>fecha: {client.fecha}</div>
                <div>monto: {client.monto}</div>
            </RowContainer>
            <RowContainer>
                <div>pais: {client.pais}</div>
                <div>tipo: {client.tipo}</div>
            </RowContainer>
            <div>
                {client.estado}
            </div>
        </CardContainer>
    )
}