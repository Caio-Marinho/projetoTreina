import { useState } from 'react';

function Experiencia() {
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

  // Função para remover uma experiência específica, garantindo que sempre haja pelo menos uma
  const removerExperiencia = (index) => {
    if (experiencias.length > 1) {
      setExperiencias(experiencias.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="mb-3">
      <h4>Experiências</h4>
      {experiencias.map((exp, index) => (
        <div key={index} className="mb-3 border p-3 rounded experiencia-container">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Experiência {index + 1}</h5>
            {experiencias.length > 1 && (
              <button type="button" className="btn btn-danger btn-sm" onClick={() => removerExperiencia(index)}>
                Remover
              </button>
            )}
          </div>
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
              <option value="">Selecione...</option>
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
  );
}

export default Experiencia;
