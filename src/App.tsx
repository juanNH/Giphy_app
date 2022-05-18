import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { IndexRouter } from "./routers";
import GlobalStyles from "./styles/global";
import { light } from "./styles/themes";


function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <BrowserRouter>
        <IndexRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
