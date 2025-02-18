import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/NavBar/NavBar.css';
import './components/Formulario/Formulario.css';
import './components/Curriculo/Identificacao/Identificacao.css';
import './components/Curriculo/Formacao/Formacao.css';
import './components/Curriculo/Experiencia/Experiencia.css';
import './components/Curriculo/Redes/Redes.css';
import './components/Components.css';
import NavBar from './components/NavBar/NavBar';
import Formulario from "./components/Formulario/Fomulario";
import Identificacao from './components/Curriculo/Identificacao/Identificacao';
import Formacao from './components/Curriculo/Formacao/Formacao';
import Experiencia from './components/Curriculo/Experiencia/Experiencia';
import Redes from './components/Curriculo/Redes/Redes';

function Hearder() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/visualizar" element={<Visualizar />} />
          <Route path="/" element={<Formulario />} />
          <Route path="/listar" element={<Listar />} />
        </Routes>
      </Router>
    </>
  )
}

function Visualizar() {
  return(
    <>
    <div className="limite">
      <Identificacao />
      <Formacao />
      <Experiencia />
      <Redes />
      <Footer/>
    </div>  
    </>
  )
}
function Footer(){
  return(
    <>
      <footer className="footer">
        <p className="copyright">&copy;Copyright 2025 - Desenvolvido por Caio Marinho</p>
      </footer>
    </>
  )
}

function Editar() {
  return(
    <>
    </>
  )
}

function Listar() {
  return(
    <>
    </>
  )
}


function App() {

  return (
    <>
    <Hearder />
    
    </>
  )
}

export default App
