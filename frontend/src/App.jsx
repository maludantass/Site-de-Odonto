import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jornada from "./pages/Jornada";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jornada" element={<Jornada />} />
    </Routes>
  );
}

export default App;