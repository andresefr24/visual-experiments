import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import theme from "./styles/theme";
import CustomRouter from "./routes/Router";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CustomRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
