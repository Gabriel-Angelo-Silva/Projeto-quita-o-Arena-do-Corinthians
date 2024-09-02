CREATE DATABASE contagem;

-- Selecionar o banco de dados
USE contagem;

-- Criação da tabela para armazenar transferências
CREATE TABLE transferencias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    valor DECIMAL(15, 2) NOT NULL,
    data TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
