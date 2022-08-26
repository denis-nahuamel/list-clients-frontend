import { MoneyContainer, RowContainer } from "./styles"
import money from '../../assets/icons/money.png'
export const BodyCard = (props: { nombres: string, monto: number, tipo: string }) => {
    return (
        <>
            <div>
                <strong style={{ color: "#00462C" }}>Nombres:</strong>
                <div>{props.nombres}</div>
            </div>
            <RowContainer>
                <MoneyContainer>
                    <img src={money} alt="money" style={{ width: '1.5rem' }} />
                    {props.monto}
                </MoneyContainer>
                <div>
                    <strong>Tipo:</strong>
                    {props.tipo}
                </div>
            </RowContainer>
        </>

    )
}