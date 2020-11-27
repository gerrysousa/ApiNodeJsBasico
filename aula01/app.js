const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    let obj = req.query;
    return res.send({message:`Tudo ok com o metodo GET! Voce enviou o nome ${obj.nome} com a idade ${obj.idade} `})
})

app.post('/', (req,res)=>{
    return res.send({message:'Tudo ok com o metodo POST!!!'})
})

app.listen(3000);


module.exports = app;