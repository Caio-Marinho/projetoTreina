import './NavBar.css';
import MyThemeSwitcher from '../ModoEscuro/MyThemeSwitcher';
import { gerarPDF } from '../utils/GerarPDF';

function NavBar() {
  return(
    <>
      <div className="fixed-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid cor">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse centralizar" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item centralizar">
          <a id ="cadastar" className="nav-link" aria-current="page" href="/">Cadastar</a>
        </li>
        <li className="nav-item centralizar">
          <a id="listar" className="nav-link" href="/listar">Listar</a>
        </li>
        <li className="nav-item centralizar">
          <a id="visualizar" className="nav-link" href="/visualizar">Visualizar</a>
        </li>
        <li className="nav-item centralizar">
          <button className="nav-link" onClick={() => gerarPDF('curriculo') }>Imprimir</button>
        </li>
      </ul>
      <MyThemeSwitcher/>
    </div>
    <a className="navbar-brand" href="/visualizar">
      <img className="image" id="logo" src="./img/generico.jpg" alt="" ></img>
  </a>
  </div>
</nav>
      </div>
    </>
  )
}
export default NavBar;