import './Formacao.css'

function Formacao() {
    return(
      <>
      <h3 className="titulo-secao formacao">Formação</h3>
      <div className="container">
        <h5 className="graduacao">Graduação</h5>
        <ul>
          <li className="item deslocamento">
                2021- Atual - Bacharelado em Gestão da Informação - Universidade Federal de Pernambuco
            </li>
            <li className="item deslocamento">
                2022- 2024 - Técnologo em Análise e Desenvolvimento de Sistemas - Faculdade Senac Pernambuco
            </li>
        </ul>
        <ul>
          <h5 className="tecnico">Técnico</h5>
          <li className="item deslocamento">
            2018 - 2020 - Mecânica Industrial - Escola Técnica Estadual Professor Agamenon Magalhães
          </li>
        </ul>
      </div>
      <hr/>
      </>
    )
}
export default Formacao;