import './Redes.css'

function Redes(){
    return(
      <>
      <h3 className="titulo-secao redes">Redes Sociais</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
      <div className="col-md-4 espaco-entre">
              <p1><span id ="contato-email"></span><span id="title_email"></span><a id="email" className="remover" href="" target="_blank">Kaigabriel12@gmail.com</a></p1>
            </div>
            <div className="col-md-4 espaco-entre">
              <p1><span id="contato-likedin"></span><span id="title_likedin"></span><a id="likedin" href="" className="remover" target="_blank">Caio Marinho</a></p1>
            </div>
              <div className="col-md-4 espaco-entre">
                <p1><span id="contato-github"></span><span id="title_github"></span><a id="github" className="remover" href="" target="_blank">Caio Marinho</a></p1>
            </div>
            </div>
            <hr/>
      </>
    )
}
export default Redes;