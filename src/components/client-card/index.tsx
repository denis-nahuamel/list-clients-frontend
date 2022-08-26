/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { IClient } from "../../models/client.interface"
import { CardContainer } from "./styles"
import { HeaderCard } from './header-card'
import { BodyCard } from './body-card'
import { FooterCard } from './footer-card'

export const ClientCard = (client: IClient) => {
    return (
        <CardContainer>
            <HeaderCard pais={client.pais} fecha={client.fecha} />
            <BodyCard nombres={client.nombres} monto={client.monto} tipo={client.tipo} />
            <FooterCard estado={client.estado} />
        </CardContainer>
    )
}