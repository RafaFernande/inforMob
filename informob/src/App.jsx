import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Cabecalho from './pages/cabecalho/Cabecalho';
import Rodape from './pages/rodape/Rodape';
import Home from './pages/home/Home'; 

function App() {
  return (
    <Router>
      <div>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Login />} /> {/* Defina a rota para o login */}
          <Route path="/home" element={<Home />} /> {/* Defina a rota para a home */}
        </Routes>
        <Rodape />
      </div>
    </Router>
  );
}

export default App;
