const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    const params = Array(
        request.body.name,
        request.body.email,
        request.body.cellphone,
        request.body.password,
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