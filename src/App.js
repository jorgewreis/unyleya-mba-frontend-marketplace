import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Produtos from './pages/Produtos';
import Produto from './pages/Produto';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produto/:id" element={<Produto />} />
        </Routes>
      </main>
  );
}

export default App;