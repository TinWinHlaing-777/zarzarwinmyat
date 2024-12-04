import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import { GlobalStyle } from "./styles/Global.style";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
