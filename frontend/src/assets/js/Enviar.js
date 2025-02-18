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
          usuario = data[0];
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
          endereco = data[0];
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
export default enviar;