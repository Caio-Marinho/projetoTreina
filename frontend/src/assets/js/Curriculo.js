async function Curriculo(){
    let nome = '';
    let endereco = "";
    const sem_numero = "s/n";
    await fetch('http://localhost:8080/pessoa',{
        method : 'GET',
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        nome = data[0].nome
        endereco = `${data[0].logradouro}${data[0].numero?", Nº"+data[0].numero:sem_numero},${data[0].cep} ,${data[0].bairro}, ${data[0].cidade}-${data[0].uf}`
    })
    document.getElementById('nome').innerHTML = `<b>Nome: </b>${nome}`;
    document.getElementById("Endereco").innerHTML = `<b>Endreço: </b>${endereco}`
}
export default Curriculo;