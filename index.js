const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("<h1>Bem-vindo ao meu site!</h1>");
});

app.get("/produtos", function(req,res){
    res.send("<h1>Lista de Produtos</h1>");
});

app.get("/contato", function(req,res){
    res.send("<h1>Entre em Contato</h1>");
});

const PORT = 3000;

app.listen(PORT, function(){
    console.log("Servidor rodando na porta " + PORT);
});