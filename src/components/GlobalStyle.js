import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
   margin: 0;
  }

  ul {
  list-style: none;
  padding: 0;
  }

  p {
  margin: 0;
}
  img {
  width: 100%;
}
`;