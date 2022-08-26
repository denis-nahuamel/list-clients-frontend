import { ElementContainer, GreenButton, RedButton, RowContainer } from "./styles"
import { EEstado } from "../../models/client.interface"
export const FooterCard = (props: { estado: number }) => {
    return (
        <RowContainer>
            <ElementContainer>
                {props.estado === 0 ? <RedButton /> : <GreenButton/>}
                {EEstado[props.estado]}
            </ElementContainer>
        </RowContainer>
    )
}