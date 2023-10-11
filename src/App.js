import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Produto from "./pages/Produto";
import NotFound404 from "./pages/NotFound404";
import NavBar from "./components/NavBar";

function App() {
  return (
      <>
        <NavBar />
        <Routes>            
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound404 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/produto/:id" element={<Produto />} />
        </Routes>
      </>
  );
}

export default App;