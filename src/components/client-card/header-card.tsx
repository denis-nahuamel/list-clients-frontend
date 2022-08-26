import { ElementContainer, RowContainer } from "./styles"
import world from '../../assets/icons/world.png'
import calendar from '../../assets/icons/calendar.png'
export const HeaderCard = (props: { pais: string, fecha: string }) => {
    return (
        <RowContainer>
            <ElementContainer>
                <img src={world} alt="world" />
                {props.pais}
            </ElementContainer>
            <ElementContainer>
                <img src={calendar} alt="calendar" />
                {props.fecha}
            </ElementContainer>
        </RowContainer>
    )
}