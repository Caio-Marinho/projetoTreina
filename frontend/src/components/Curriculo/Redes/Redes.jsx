import './Redes.css'

function Redes(){
    return(
      <>
      <h3 className="titulo-secao redes">Redes Sociais</h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 ">
      <div className="col-md-4 espaco-entre">
              <p1><b>Email: </b><a href="mailto:kaigabriel12@gmail.com" target="_blank">Kaigabriel12@gmail.com</a></p1>
            </div>
            <div className="col-md-4 espaco-entre">
              <p1><b>Linkedin: </b><a href="https://br.linkedin.com/in/caio-marinho-b46143223" target="_blank">Caio Marinho</a></p1>
            </div>
              <div className="col-md-4 espaco-entre">
                <p1><b>Github: </b><a href="https://github.com/Caio-Marinho" target="_blank">Caio Marinho</a></p1>
            </div>
            </div>
            <hr/>
      </>
    )
}
export default Redes;