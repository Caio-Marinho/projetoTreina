import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from 'react';
import './App.css'

async function enviar() {

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const logradouro = document.getElementById("rua").value;
  const numero = document.getElementById("numero").value;
  const cep = document.getElementById("cep").value;
  const bairro = document.getElementById("bairro").value;
  const cidade = document.getElementById("cidade").value;
  const uf = document.getElementById("uf").value;
  const foto = document.getElementById("img-input").files[0];
  let usuario = "";
  let endereco= "";
  let status = "";
  let baseString64 = "";

  // Lê a imagem em base64 (se houver)
  if (foto) {
    baseString64 = await lerImagemBase64(foto);
  }

  try {
    // 1️⃣ Cadastrar Usuário
    await fetch("http://localhost:8080/usuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "nome":nome,
        "email":email,
        "foto": baseString64
      }),
    })
    .then(response => {status = response.status; return response.json()})
    .then(data => {
      usuario = data;
    })
    .catch(error => {
      console.error(error);
    })
    if (status == 409) {
      await fetch("http://localhost:8080/usuario", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then(response => response.json())
      .then(data => {
        usuario = data;
      })
    }
    // 2️⃣ Cadastrar Endereço
    await fetch("http://localhost:8080/endereco", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "logradouro":logradouro,
        "numero":numero,
        "bairro":bairro,
        "cidade":cidade,
        "uf":uf,
        "cep":cep
      }),
    })
    .then(response => {
      if (response.status == 400) {
        status = response.status;
        alert("Unidade Federativa (UF) Inválida!");
    } else {
      status = response.status
      return response.json();
    }
  })
    .then(data => {
      endereco = data;
    })
    .catch(error => {
      console.error(error);
    })
    if (status == 409) {
      await fetch("http://localhost:8080/endereco", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        endereco = data;
      })
    }
    // 3️⃣ Associar Usuário ao Endereço
    await fetch("http://localhost:8080/usuarioendereco", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "usuario":usuario,
        "endereco":endereco
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })

  } catch (error) {
    console.error("Erro geral:", error.message);
  }
}


// Converte imagem para Base64 usando Promise
function lerImagemBase64(foto) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(foto);
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject("Erro ao ler imagem.");
  });
}


function Hearder() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/visualizar" element={<Visualizar />} />
          <Route path="/" element={<Cadastrar />} />
          <Route path="/listar" element={<Listar />} />
        </Routes>
      </Router>
    </>
  )
}

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
          <a className="nav-link" href="#">Imprimir</a>
        </li>
      </ul>
    </div>
    <a className="navbar-brand" href="/visualizar">
      <img className="image" src="./img/generico.jpg" alt="" ></img>
  </a>
  </div>
</nav>
      </div>
    </>
  )
}

function Cadastrar() {
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
    <div className="container mt-5">
      <h2 className="mb-4">Cadastro</h2>
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

function Visualizar() {
  return(
    <>
      <Indentificao />
      <Formacao />
      <Experiencia />
      <Redes />
      <Footer/>
    </>
  )
}

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
            <img src="../public/img/icons8-whatsapp-48.png" alt="" />
          </div>
        </div>
      </div>
    <hr/>
    </>
  )
}
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

function Experiencia() {
  return(
    <>
      <h3 className="titulo-secao experiencia">Experiência</h3>
      <div className="container">
        <h5 className="voluntario">Voluntário</h5>
        <ul>
        <li className="item deslocamento">
          2025-2026 - Membro Voluntário na AIESEC como diretor de Finanças & Legalidades
        </li>
        <li className="item deslocamento">
          2024-2024 - Membro Voluntário na AIESEC no time de New Sales
        </li>
        </ul>
        <h5 className="extra">Extra-Curricular</h5>
        <ul>
          <li className="item deslocamento">
            2023-2025 - Membro Ativo do Diretório Acadêmico Curso de Gestão da Informação
          </li>
        </ul>
        <h5 className="projetos">Projetos</h5>
        <ul>
          <li className="item deslocamento">
            2023-2024 - Assentamento Funcional Digital (AFD)
          </li>
        </ul>
      </div>
      <hr></hr>
    </>
  )
}

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
