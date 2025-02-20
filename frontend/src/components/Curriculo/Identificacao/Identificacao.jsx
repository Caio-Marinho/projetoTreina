import './Identificacao.css'

function Indentificao() {

    return(
      <>
      <h3 className="titulo-secao identificacao">Identificação</h3>
        <div className="container">
       <div className="row row-cols-12 espaco">
              <div className="col">
                <p1 id="nome"></p1><br/>
              </div>
            </div>
        <div className="row row-cols-12 espaco">
              <div className="col">
                <p1 id="Endereco"></p1>
              </div>
            </div>
          <div className="row row-cols-auto ">
            
            <div className="col espaco-entre">
              <p1 ><b>Telefone: </b><a href="" className='remover' id="whatsapp" target="_blank">
            <span id="telefone"></span>
            <span id="contato"></span>
              </a></p1>
            </div>
          </div>
        </div>
      <hr/>
      </>
    )
}
export default Indentificao;