const express = require('express'); 
const ejs = require('ejs');
const bodyParser = require('body-parser')
const db = require('./database/db')
const { insertUser, alterUser, deleteUser, listUser } = require('./database/db')
const { insertRequest, alterRequest, deleteRequest, listRequest } = require('./database/db')
const { listUserRequest } = require('./database/db')

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index', { usuarios: listUser() })
})

app.listen(3000, function(erro){
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})