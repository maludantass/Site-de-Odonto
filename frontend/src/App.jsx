import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jornada from "./pages/Jornada";
import Sobre from "./pages/Sobre";
import Conteudo from "./pages/Conteudo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jornada" element={<Jornada />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/conteudo" element={<Conteudo />} />
    </Routes>
  );
}

export default App;