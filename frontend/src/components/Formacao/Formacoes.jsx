import { useState } from "react";

function Formacao() {
  const [formacoes, setFormacoes] = useState([
    { curso: "", inicio: "", fim: "", grau: "" },
  ]);

  // Atualiza os dados de uma formação específica
  const handleFormacaoChange = (index, event) => {
    const { name, value } = event.target;
    const novasFormacoes = [...formacoes];
    novasFormacoes[index][name] = value;
    setFormacoes(novasFormacoes);
  };

  // Adiciona um novo conjunto de campos de formação
  const adicionarFormacao = () => {
    setFormacoes([...formacoes, { curso: "", inicio: "", fim: "", grau: "" }]);
  };

  // Remove uma formação pelo índice
  const removerFormacao = (index) => {
    if (formacoes.length > 1) {
      const novasFormacoes = formacoes.filter((_, i) => i !== index);
      setFormacoes(novasFormacoes);
    }
  };
  return (
    <div>
      <h4>Formações</h4>
      {formacoes.map((formacao, index) => (
        <div key={index} className="mb-3 border p-3 rounded formacao-container">
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
          {/* Botão de Remover */}
          <button
            type="button"
            className="btn btn-danger mt-2"
            onClick={() => removerFormacao(index)}
            disabled={formacoes.length === 1} // Impede remoção do último item
          >
            Remover
          </button>
        </div>
      ))}
      {/* Botão de Adicionar */}
      <button type="button" className="btn btn-secondary mt-3" onClick={adicionarFormacao}>
        +
      </button>
    </div>
  );
}

export default Formacao;
