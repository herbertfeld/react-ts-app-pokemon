import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  font-family: 'Ubuntu', 'Roboto', 'Helvetica Neue';

}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${props => props.theme['blue-500']}
  }

body {
  background-image: linear-gradient(to bottom, ${props => props.theme['blue-500']}, #00285f);
  color: white;
  -webkit-font-smoothing: antialiased;
  height: 100vh;
}

body, input, select, textarea, button {
  font: 400 1rem Ubuntu
  }
`;