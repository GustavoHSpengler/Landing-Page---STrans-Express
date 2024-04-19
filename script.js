let button = document.getElementById("envio")

button.onclick = async function() {
    let name = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cellphone = document.getElementById("telefone").value;
    let password = document.getElementById("senha").value;
    let cpf = document.getElementById("cpf").value;

    let data = {name, email, cellphone, password, cpf}

    const response = await fetch("http://localhost:3005/api/store/task", {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    if (content.success) {
        alert("Sucesso")
    } else {
        alert("Não")
    }
}