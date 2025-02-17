
export function enviar(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const logradouro = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const cep = document.getElementById("cep").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const uf = document.getElementById("uf").value;
    const telefone = document.getElementById("telefone").value;
    const ddd = document.getElementById("ddd").value;
    const whatsaap = document.querySelector('input[name="whatsapp"]:checked')
    const linkedin = document.getElementById("LinkedIn").value;
    const github = document.getElementById("Github").value;
    const Instagram = document.getElementById("Instagram").value;
    const foto = document.getElementById("img-input").files[0];
    var baseString64 = "";
    if (foto){
        const reader = new FileReader();
        reader.onload = function (e){
            baseString64 = e.target.result;
        }
        reader.readAsDataURL(foto);
    }
    console.log("Hello");
    document.getElementById("enviar").addEventListener(
        'submit',
        () => {
            fetch("http://localhost:8080/usuario" ,{
                method: "POST",
                headers : {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify({
                    "nome": nome,
                    "email": email,
                    "foto": baseString64
            })
        })
            .then(response => {
                if (response.status < 400) {
                    return response.json();
                } else {
                    throw new Error("Erro: "+ response.statusText);
                }
            })
            .then(data => {
                console.log(data);
            })
        }
    )
}
