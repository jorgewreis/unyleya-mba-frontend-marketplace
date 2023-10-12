import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Produto from "./pages/Produto";
import NotFound404 from "./pages/NotFound404";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Admin from "./pages/Admin";

function App() {
  return (
      <>
        <AuthProvider>
          <NavBar />
          <Routes>            
              <Route path="/" element={<Login />} />
              <Route path="*" element={<NotFound404 />} />

              <Route path="/home" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } />

              <Route path="/cadastro" element={<Cadastro />} />

              <Route path="/produto/:id" element={
                <ProtectedRoute>
                  <Produto />
                </ProtectedRoute>
              } />

              <Route path="/admin" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />
          </Routes>
        </AuthProvider>
      </>
  );
}

export default App;