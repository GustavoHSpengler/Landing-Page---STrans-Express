create database bd_strex;
use bd_strex;

CREATE TABLE users_strex(
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cpf VARCHAR(255) NOT NULL
);

INSERT INTO users_strex (nome, email, telefone, senha, cpf)
VALUES ('pedro', 'pedro@email.com', '51992456750', 'Pc1236@', '046.574.400-70'),
('Gustavo', 'gustavo@email.com', '5198765458', 'Gt454!#', '057.431.500-40');

SELECT * FROM users_strex;