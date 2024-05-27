const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Configurar conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: '192.168.0.9',
    user: 'diario',
    password: 'S3cur1ty2306@',
    database: 'diario'
});

// Rota para inserir dados
router.post('/dados', (req, res) => {
    const { aluno, data_nascimento, etapa, ano_letivo, professor, turma, aspectos } = req.body;
    const sql = 'INSERT INTO diario_de_bordo (aluno, data_nascimento, etapa, ano_letivo, professor, turma, aspectos) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [aluno, data_nascimento, etapa, ano_letivo, professor, turma, JSON.stringify(aspectos)], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send('Dados inseridos com sucesso');
    });
});

module.exports = router;
