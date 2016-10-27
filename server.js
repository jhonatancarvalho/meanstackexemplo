"use strict";

let express = require('express');
let app = express();
let mongojs = require('mongojs');
let db = mongojs('listaContatos', ['listaContatos']);
let bodyParser = require('body-parser');

let serverPort = 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/listaContatos', function (req, res) {
  db.listaContatos.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/listaContatos', function (req, res) {
  db.listaContatos.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});

app.delete('/listaContatos/:id', function (req, res) {
  let id = req.params.id;
  db.listaContatos.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.get('/listaContatos/:id', function (req, res) {
  let id = req.params.id;
  db.listaContatos.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/listaContatos/:id', function (req, res) {
  let id = req.params.id;
  db.listaContatos.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {nome: req.body.nome, email: req.body.email, numero: req.body.numero, detalhes: req.body.detalhes}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

app.listen(serverPort);
console.log(`Server rodando na porta ${serverPort}.`);