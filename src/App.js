import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import NavBar from "./components/NavBar";
import NotFound404 from "./pages/NotFound404";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/ProductInfo";
import ProtectedRoute from "./routes/ProtectedRoute";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Cart from "./pages/Cart";
import Complete from "./pages/Complete";

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

              <Route path="/product/:id" element={
                <ProtectedRoute>
                  <Product />
                </ProtectedRoute>
              } />

              <Route path="/cart" element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              } />

              <Route path="/complete" element={
                <ProtectedRoute>
                  <Complete />
                </ProtectedRoute>
              } />

              <Route path="/admin" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />

              <Route path="/admin/addProduct" element={
                <ProtectedRoute>
                  <AddProduct />
                </ProtectedRoute>
              } />

              <Route path="/admin/editProduct/:id" element={
                <ProtectedRoute>
                  <EditProduct />
                </ProtectedRoute>
              } />
          </Routes>
        </AuthProvider>
      </>
  );
}

export default App;