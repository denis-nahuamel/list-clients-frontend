import styled from "@emotion/styled";
import { fAlignCenter, fDirCol, fDirRow, flexContainer, fSpaceBet } from "../../styles/general";
import { css } from '@emotion/react'
export const CardContainer = styled('div')`
    ${flexContainer};
    ${fDirCol};
    gap: 0.8rem;
    width: 15rem;
    background-color: #F5F4F9;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    padding: 0.8rem 1.5rem;
    margin: 0.5rem;
`;
const basicContainer = css`
    ${flexContainer};
    ${fAlignCenter};
    gap: 0.2rem;
`
export const RowContainer = styled('div')`
    ${flexContainer};
    ${fDirRow};
    ${fSpaceBet};
    ${fAlignCenter}
`
export const ElementContainer = styled('div')`
    ${basicContainer};
`
export const MoneyContainer = styled('div')`
    ${basicContainer};
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
    background-color: #D9D9D9;
`
const BasicButton = css`
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
`
export const GreenButton = styled('div')`
    ${BasicButton};
    background-color: green;
`
export const RedButton = styled('div')`
    ${BasicButton};
    background-color: red;
`