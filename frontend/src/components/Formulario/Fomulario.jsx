import { useState } from 'react';
import enviar from '../../assets/js/Enviar';
import './Formulario.css';

function Formulario() {
    const [preview, setPreview] = useState("https://cdn-icons-png.flaticon.com/128/3524/3524388.png");
    const [formacoes, setFormacoes] = useState([
      { nome: '', dataInicio: '', dataFim: '', grau: '' }
    ]);
  
    // Atualiza a pré-visualização da imagem
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    };
  
    // Atualiza os dados de uma formação específica
    const handleFormacaoChange = (index, event) => {
      const { name, value } = event.target;
      const novasFormacoes = [...formacoes];
      novasFormacoes[index][name] = value;
      setFormacoes(novasFormacoes);
    };
  
    // Adiciona um novo conjunto de campos de formação
    const adicionarFormacao = () => {
      setFormacoes([...formacoes, { nome: '', dataInicio: '', dataFim: '', grau: '' }]);
    };
    // Estado para armazenar as experiências
    const [experiencias, setExperiencias] = useState([
      { nome: '', categoria: '', dataInicio: '', dataFim: '' }
    ]);
  
    // Função para atualizar os dados de uma experiência específica
    const handleExperienciaChange = (index, event) => {
      const { name, value } = event.target;
      const novasExperiencias = [...experiencias];
      novasExperiencias[index][name] = value;
      setExperiencias(novasExperiencias);
    };
  
    // Função para adicionar um novo conjunto de campos de experiência
    const adicionarExperiencia = () => {
      setExperiencias([...experiencias, { nome: '', categoria: '', dataInicio: '', dataFim: '' }]);
    };
  
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
                <input className="form-check-input" type="radio" name="whatsapp" id="whatsappSim" value="sim" />
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
  
          {/* Seção de Formação */}
          <div className="mb-3">
            <h4>Formações</h4>
            {formacoes.map((formacao, index) => (
              <div key={index} className="mb-3 border p-3 rounded">
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    name="nome"
                    id={`formacaoNome${index}`}
                    placeholder="Nome da Formação"
                    value={formacao.nome}
                    onChange={(e) => handleFormacaoChange(index, e)}
                  />
                  <label htmlFor={`formacaoNome${index}`}>Nome da Formação</label>
                </div>
                <div className="mb-2">
                  <label htmlFor={`grau${index}`} className="form-label">Grau</label>
                  <select
                    className="form-select"
                    id={`grau${index}`}
                    name="grau"
                    value={formacao.grau}
                    onChange={(e) => handleFormacaoChange(index, e)}
                  >
                    <option value="Ensino Médio">Ensino Médio</option>
                    <option value="Graduação">Graduação</option>
                    <option value="Técnico">Técnico</option>
                    <option value="Pós-graduação">Pós-graduação</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col form-floating">
                    <input
                      type="date"
                      className="form-control"
                      name="dataInicio"
                      id={`dataInicio${index}`}
                      placeholder="Data de Início"
                      value={formacao.dataInicio}
                      onChange={(e) => handleFormacaoChange(index, e)}
                    />
                    <label htmlFor={`dataInicio${index}`}>Data de Início</label>
                  </div>
                  <div className="col form-floating">
                    <input
                      type="date"
                      className="form-control"
                      name="dataFim"
                      id={`dataFim${index}`}
                      placeholder="Data de Término ou Previsão"
                      value={formacao.dataFim}
                      onChange={(e) => handleFormacaoChange(index, e)}
                    />
                    <label htmlFor={`dataFim${index}`}>Data de Término ou Previsão</label>
                  </div>
                </div>
              </div>
            ))}
            <button type="button" className="btn btn-secondary" onClick={adicionarFormacao}>
              +
            </button>
          </div>
          <div className="mb-3">
            <h4>Experiências</h4>
            {experiencias.map((exp, index) => (
              <div key={index} className="mb-3 border p-3 rounded">
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    className="form-control"
                    name="nome"
                    id={`expNome${index}`}
                    placeholder="Nome da Experiência"
                    value={exp.nome}
                    onChange={(e) => handleExperienciaChange(index, e)}
                  />
                  <label htmlFor={`expNome${index}`}>Nome da Experiência</label>
                </div>
                <div className="mb-2">
                  <label htmlFor={`categoria${index}`} className="form-label">Categoria</label>
                  <select
                    className="form-select"
                    id={`categoria${index}`}
                    name="categoria"
                    value={exp.categoria}
                    onChange={(e) => handleExperienciaChange(index, e)}
                  >
                    <option value="Eventos">Eventos</option>
                    <option value="Projetos">Projetos</option>
                    <option value="Profissional">Profissional</option>
                    <option value="Voluntariado">Voluntariado</option>
                    <option value="Extracurricular">Extracurricular</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col form-floating">
                    <input
                      type="date"
                      className="form-control"
                      name="dataInicio"
                      id={`dataInicio${index}`}
                      placeholder="Data de Início"
                      value={exp.dataInicio}
                      onChange={(e) => handleExperienciaChange(index, e)}
                    />
                    <label htmlFor={`dataInicio${index}`}>Data de Início</label>
                  </div>
                  <div className="col form-floating">
                    <input
                      type="date"
                      className="form-control"
                      name="dataFim"
                      id={`dataFim${index}`}
                      placeholder="Data de Término ou Previsão"
                      value={exp.dataFim}
                      onChange={(e) => handleExperienciaChange(index, e)}
                    />
                    <label htmlFor={`dataFim${index}`}>Data de Término ou Previsão</label>
                  </div>
                </div>
              </div>
            ))}
            {/* Botão "+" para adicionar nova experiência */}
            <button type="button" className="btn btn-secondary" onClick={adicionarExperiencia}>
              +
            </button>
          </div>
          {/* Campo para anexar imagem */}
          <div className="mb-3">
            <label className="form-label">Foto de Perfil</label>
            <input type="file" id="img-input" onChange={handleImageChange} className="form-control" />
          </div>
  
          {/* Campo para pré-visualização da imagem */}
          <div className="mb-3">
            <p>Pré-visualização:</p>
            <img 
              id="imgPreview"
              src={preview} 
              alt="Pré-visualização" 
              className="img-thumbnail" 
              style={{ maxWidth: '200px' }} 
            />
          </div>
  
          <button type="submit" id="enviar" className="btn btn-primary">Cadastrar</button>
        </form>
      </div>
      </>
    )
}
export default Formulario;