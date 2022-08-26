/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import world from '../../assets/icons/world.png'
import money from '../../assets/icons/money.png'
import calendar from '../../assets/icons/calendar.png'
import { EEstado, IClient } from "../../models/client.interface"
import { CardContainer, ElementContainer, GreenButton, MoneyContainer, RedButton, RowContainer } from "./client-card.style"

export const ClientCard = (client: IClient) => {
    return (
        <CardContainer>
            <RowContainer>
                <ElementContainer>
                    <img src={world} alt="world" />
                    {client.pais}
                </ElementContainer>
                <ElementContainer>
                    <img src={calendar} alt="calendar" />
                    {client.fecha}
                </ElementContainer>
            </RowContainer>
            <div>
                <strong style={{ color: "#00462C" }}>Nombres:</strong>
                <div>{client.nombres}</div>
            </div>
            <RowContainer>
                <MoneyContainer>
                    <img src={money} alt="money" style={{ width: '1.5rem' }} />
                    {client.monto}
                </MoneyContainer>
                <div>
                    <strong>Tipo:</strong>
                    {client.tipo}
                </div>
            </RowContainer>
            <RowContainer>
                <ElementContainer>
                    {client.estado === 1 ? <GreenButton /> : <RedButton />}
                    {EEstado[client.estado]}
                </ElementContainer>
            </RowContainer>
        </CardContainer>
    )
}