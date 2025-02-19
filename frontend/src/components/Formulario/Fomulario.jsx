import enviar from '../../assets/js/Enviar';
import Imagem from '../image/TrocarImagem';
import Formacao from '../Formacao/Formacoes';
import Experiencia from '../Experiencia/Experiencia';
import './Formulario.css';

function Formulario() {
  
    const handleSubmit = (e) => {
      e.preventDefault();
      enviar();
    };
  
    return (
      <>
      <div className="container mt-5 ">
        <h2 className="mb-4 margem">Cadastro</h2>
        <form onSubmit={handleSubmit}>
          {/* Campos básicos */}
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="nome" placeholder="Nome" />
            <label htmlFor="nome">Nome Completo</label>
          </div>
  
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="rua" placeholder="Rua" />
            <label htmlFor="rua">Logradouro</label>
          </div>
  
          <div className="row mb-3">
            <div className="col form-floating">
              <input type="text" className="form-control" id="numero" placeholder="Número" />
              <label htmlFor="numero">Número</label>
            </div>
            <div className="col form-floating">
              <input type="text" className="form-control" id="cep" placeholder="CEP" />
              <label htmlFor="cep">CEP</label>
            </div>
          </div>
  
          <div className="row mb-3">
            <div className="col form-floating">
              <input type="text" className="form-control" id="bairro" placeholder="Bairro" />
              <label htmlFor="bairro">Bairro</label>
            </div>
            <div className="col form-floating">
              <input type="text" className="form-control" id="cidade" placeholder="Cidade" />
              <label htmlFor="cidade">Cidade</label>
            </div>
            <div className="col form-floating">
              <input type="text" className="form-control" id="uf" placeholder="UF" />
              <label htmlFor="uf">UF</label>
            </div>
          </div>
  
          <div className="row mb-3">
            <div className="col-md-4 form-floating">
              <input type="text" className="form-control" id="telefone" placeholder="Telefone" />
              <label htmlFor="telefone">Telefone</label>
            </div>
            <div className="col-md-3 form-floating">
              <input type="text" className="form-control" id="ddd" placeholder="DDD" />
              <label htmlFor="ddd">DDD</label>
            </div>
            <div className="col-md-5 form-floating">
              <input type="email" className="form-control" id="email" placeholder="Email" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
  
          <div className="row mb-3">
            <div className="col d-flex align-items-center">
              <p className="mb-0 me-2">Número informado é WhatsApp?</p>
              <div className="form-check me-3">
                <input className="form-check-input" type="radio" name="whatsapp" id="whatsappSim" value="sim" checked />
                <label className="form-check-label" htmlFor="whatsappSim">Sim</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="whatsapp" id="whatsappNao" value="nao" />
                <label className="form-check-label" htmlFor="whatsappNao">Não</label>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4 form-floating">
              <input type="text" className="form-control" id="LinkedIn" placeholder="LinkedIn" />
              <label htmlFor="LinkedIn">LinkedIn</label>
            </div>
            <div className="col-md-3 form-floating">
              <input type="text" className="form-control" id="Github" placeholder="Github" />
              <label htmlFor="Github">Github</label>
            </div>
            <div className="col-md-5 form-floating">
              <input type="email" className="form-control" id="Instagram" placeholder="Instagram" />
              <label htmlFor="Instagram">Instagram</label>
            </div>
          </div>
  
          <Formacao/>
          <Experiencia />
          <Imagem />
          <button type="submit" id="enviar" className="btn btn-primary">Cadastrar</button>
        </form>
      </div>
      </>
    )
}
export default Formulario;