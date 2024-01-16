const express = require('express');
const app = express();

const port = 3001;

const json = [
    {
        nome: 'Renato',
        sobrenome: 'Ribeiro'
    },
    {
        idade: 35,
        profissao: 'Analista de Suporte'
    
}
]

app.get('/', (req, res) => {
    res.send(json);
});

app.listen(port ,() => {
    console.log("testando server");
})