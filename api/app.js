const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("olá mundo");
});

app.listen(function() {
    console.log("testando alteração");
})