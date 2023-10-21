const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'crud'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL');
});

// Rota para listar registros
app.get('/', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Erro ao buscar registros:', err);
      return;
    }
    res.render('index', { usuarios: results });
  });
});

// Rota para exibir o formulário de criação
app.get('/create', (req, res) => {
  res.render('create');
});

// Rota para criar um novo registro
app.post('/create', (req, res) => {
  const { nome, email } = req.body;
  db.query('INSERT INTO usuarios (nome, email) VALUES (?, ?)', [nome, email], (err, result) => {
    if (err) {
      console.error('Erro ao criar registro:', err);
      return;
    }
    console.log('Registro criado com sucesso:', result);
    res.redirect('/');
  });
});

// Rota para exibir o formulário de edição
app.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao buscar registro para edição:', err);
      return;
    }
    res.render('edit', { usuario: result[0] });
  });
});

// Rota para atualizar um registro
app.post('/edit/:id', (req, res) => {
  const id = req.params.id;
  const { nome, email } = req.body;
  db.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar registro:', err);
      return;
    }
    console.log('Registro atualizado com sucesso:', result);
    res.redirect('/');
  });
});

// Rota para excluir um registro
app.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error('Erro ao excluir registro:', err);
      return;
    }
    console.log('Registro excluído com sucesso:', result);
    res.redirect('/');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
