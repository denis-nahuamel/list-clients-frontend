import { css } from '@emotion/react'

const flexContainer = css`
    display: flex;
`
export const fDirCol = css`
    ${flexContainer};
    flex-direction: column
`
export const fDirRow = css`
    ${flexContainer};
    flex-direction: row
`
export const fSpaceBet = css `
    justify-content: space-between;
`
export const fAlignCenter = css`
    ${flexContainer};
    align-items: center
`