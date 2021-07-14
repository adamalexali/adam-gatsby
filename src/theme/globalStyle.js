import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
// my styles
body {
  font-family: -apple-system, Roboto, sans-serif, serif;
  margin: 1rem auto;
  max-width: 500px;
  color: #333333;
  line-height: normal;
}

a {
  text-decoration-style: dotted;
}
`;

export default GlobalStyle;
