import styled from "@emotion/styled";
import { fDirRow, fSpaceBet } from "../../styles/general";

export const CardContainer = styled('div')`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 0.5rem 2rem;
    margin: 0.5rem;
`;
export const RowContainer = styled('div')`
${fDirRow};
${fSpaceBet};
gap: 1rem
`