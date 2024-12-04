import { BrowserRouter, Route, Routes } from "react-router";
import { GlobalStyle } from "./styles/Global.style";
import Home from "./pages/home";

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
