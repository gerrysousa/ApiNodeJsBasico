const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    let obj = req.query;
    return res.send({message:`Tudo ok com o metodo GET da rota de usuarios!!!`})
})

router.post('/', (req,res)=>{
    return res.send({message:'Tudo ok com o metodo POST da rota de usuarios!!!'})
})

router.post('/create', (req,res)=>{
    return res.send({message:'Seu usuario foi criado com sucesso!!!'})
})

module.exports = router;