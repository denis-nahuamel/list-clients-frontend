import { CSSObject } from 'styled-components';
import { CSSProp } from 'styled-components';
declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}