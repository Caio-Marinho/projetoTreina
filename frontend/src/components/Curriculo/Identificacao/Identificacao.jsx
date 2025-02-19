import './Identificacao.css'
import Curriculo from '../../../assets/js/Curriculo'
function Indentificao() {
  document.addEventListener(
    "DOMContentLoaded",
    Curriculo()
  )
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
              <p1><b>Telefone: </b><a href="http://wa.me/5581979056770" className='remover' target="_blank">
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