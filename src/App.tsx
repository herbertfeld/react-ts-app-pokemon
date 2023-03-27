import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ListaPokemonsProvider } from "./contexts/ListaContext";
import { Lista } from "./pages/Lista";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ListaPokemonsProvider>
        <Lista></Lista>
      </ListaPokemonsProvider>
    </ThemeProvider>
  )
}
