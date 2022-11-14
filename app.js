const express = require('express')
const database = require('./configs/database')

//conexão com o banco de dados
database.mongoose
    .connect(database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }).then(() => {
        console.log('Conexão Estabelecida com o Banco de Dados!!');
    }).catch(error => {
        console.log('Você não conseguiu se concetar com o banco de dados', error);
        process.exit();
    })

// criando uma aplicação express
const app = express();

// Definindo que vamos enviar e receber a JSON na requisição 
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

var carroRouter = require('./routes/carroRouter')
app.use('/', carroRouter);

var utilitarioRouter = require('./routes/utilitarioRouter')
app.use('/', utilitarioRouter);

var esportivoRouter = require('./routes/esportivoRouter')
app.use('/', esportivoRouter);

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
    console.log(`O servidor está executado na porta ${PORT}`);
});