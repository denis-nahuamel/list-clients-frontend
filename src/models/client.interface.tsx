export interface IClient {
    id:number;
    fecha:string;
    nombres:string;
    monto:number;
    pais:string;
    tipo:string;
    estado:EEstado;
}
export enum EEstado {
    "INACTIVO",
    "ACTIVO"
}