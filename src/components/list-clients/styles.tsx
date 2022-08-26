
import styled from "@emotion/styled";
import { fAlignCenter, fDirRow, fJustifyCenter, flexContainer, flexWrap } from "../../styles/general";

export const ClientContainer = styled('div')`
    ${flexContainer};
    ${fAlignCenter};
    ${fJustifyCenter};
    ${fDirRow};
    ${flexWrap};
    margin: 1rem 3rem;
    font-size: 14px;
`;