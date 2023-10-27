import { GlobalStyle } from "./config/GlobalStyle";
import DefaultTheme from "./config/theme/DefaultTheme";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <DefaultTheme>
      <GlobalStyle />
      <Home />
    </DefaultTheme>
  );
}

export default App;
