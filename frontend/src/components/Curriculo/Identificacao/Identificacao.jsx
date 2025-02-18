import './Identificacao.css'

function Indentificao() {
    return(
      <>
      <h3 className="titulo-secao identificacao">Identificação</h3>
        <div className="container margem">
       <div className="row row-cols-12 espaco">
              <div className="col">
                <p1><b>Nome: </b>Caio Gabriel Marinho Oliveira do Nascimento</p1><br/>
              </div>
            </div>
        <div className="row row-cols-12 espaco">
              <div className="col">
                <p1><b>Endreço: </b>Rua Rodrigues ferreira Nº 45, Várzea,50810020, Recife,Pernambuco</p1>
              </div>
            </div>
          <div className="row row-cols-auto ">
            
            <div className="col espaco-entre">
              <p1><b>Telefone: </b><a href="http://wa.me/5581979056770" target="_blank">
              (81) 9 7905-6770 
              </a></p1>
              <img src="/img/icons8-whatsapp-48.png" alt="" />
            </div>
          </div>
        </div>
      <hr/>
      </>
    )
}
export default Indentificao;