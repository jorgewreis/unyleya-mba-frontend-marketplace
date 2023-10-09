import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Registro from './pages/Registro';
import Reviews from './pages/ProductReviews';

function App() {
  return (
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produto/:id" element={<Produto />} >
              <Route path="review" element={<Reviews />} />
          </Route>
          <Route path="/registro" element={<Registro />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
  );
}

export default App;