const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const formulario = require('./models/formulario');
const db = require('./models/db');
const dbFormulario = require('./models/formulario');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));
//Rotas
app.get('/formulario', function (req, res) {
  const filePath = path.join(__dirname, 'views', 'formulario.html');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      res.status(500).send('Erro interno do servidor');
    } else {
      res.send(data);
    }
  });
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});

app.post('/add-formulario', function (req, res){
  dbFormulario.create({
    nome: req.body.nome,
    cpf: req.body.cpf,
    idade: req.body.idade,
    telefone : req.body.telefone,
    email : req.body.email,
    endereco : req.body.endereco,
    peso : req.body.peso,
    altura : req.body.altura,
    lesoes : req.body.lesoes,
    objetivo : req.body.objetivo,
    condicionamento: req.body.condicionamento,
    fumante : req.body.fumante,
    medicamento : req.body.medicamento,
    }).then(function(){
        res.send("Cadastro realizado com sucesso!")
    }).catch(function(erro){
        res.send("Erro: Cadastro não realizado com sucesso!" + erro)
    })
}); 