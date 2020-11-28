const express = require('express');
const router = express.Router();
const token = require('../middlewares/token');

router.get('/', token, (req,res)=>{
    console.log(res.locals.auth_data);
    return res.send({message:`Tudo ok e autenticado com o metodo GET da raiz!!!`})
})

router.post('/', (req,res)=>{
    return res.send({message:'Tudo ok com o metodo POST da raiz!!!'})
})


module.exports = router;