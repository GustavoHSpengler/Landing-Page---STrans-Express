const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    const params = Array(
        request.body.nome,
        request.body.email,
        request.body.telefone,
        request.body.senha,
        request.body.cpf
    );

    const query = "INSERT INTO users_strex (nome, email, telefone, senha, cpf) VALUES(?,?,?,?,?)";

    connection.query(query, params, (err, results) => {
        console.log(err, results);
        if(results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else{
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu ruim ae meu!",
                    data: err
                })
        }
    })
}

module.exports = {
    storeTask
}