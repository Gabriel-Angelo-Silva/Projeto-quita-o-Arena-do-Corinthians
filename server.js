const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sua_senha',
    database: 'contagem'
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados!');
});

// Rota para obter a contagem atual e o valor final
app.get('/api/get-count', (req, res) => {
    const valorFinal = 710000000;
    db.query('SELECT SUM(valor) AS total FROM transferencias', (err, results) => {
        if (err) throw err;
        const totalTransferido = results[0].total || 0;
        const contagemAtual = valorFinal - totalTransferido;
        res.json({ count: contagemAtual, finalValue: valorFinal });
    });
});

// Servir arquivos estáticos
app.use(express.static('public'));

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na http://localhost:${port}`);
});
