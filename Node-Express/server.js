const express = require('express');
const RouterPrivate = require('./rotas/RouterPrivate');

const host = "127.0.0.1"
const port = 3000;

const app = express();
app.use(express.json())

app.get('/', (request, response) => {
    return response.send("Olá! Eu sou o Back-End utilizando NodeJs e Express")
})


app.use(RouterPrivate)

app.get('/teste/:codigo', (request, response) => {
    //Query 
    const query = request.query;
    let dados = "Rota de Testes " + query.nome + " - " + query.sobrenome;

    //Params
    let codigo = request.params.codigo
    dados += "<br > Params: " + codigo;

    //Body
    return response.send(dados);
})

app.listen(port, host, () => {
    console.log(`Servidor Express executando http://${host}:${port}`)
});