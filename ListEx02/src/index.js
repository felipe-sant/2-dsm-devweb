const express = require("express")
const path = require("path");
const bodyParser = require("body-parser")
const app = express()

port = "3000"
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  nome = "luiz felipe"
  res.render('index', {nome: nome});
});

app.get('/sobre', (req, res) => {
  nome = "luiz felipe"
  idade = "18"
  curso = "DSM"
  res.render('sobre', {nome: nome, idade:idade, curso:curso});
});

app.get('/contato', (req, res) => {
  telefone = "99999-9999"
  email = "email@gmail.com"
  res.render('contato', {telefone: telefone, email: email});
});


app.listen(port, () => {console.log(`Acesse: http://localhost:${port}`);});