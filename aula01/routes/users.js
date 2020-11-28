const express = require('express');
const router = express.Router();
const Users = require('../model/user');
const bcrypt = require('bcrypt');

router.get('/', async (req,res)=>{
    try{
        const users = await Users.find({});
        return res.send(users);
    }
    catch(err){
        return res.send({error: 'Erro na consulta de usuarios!'});
    }
});

router.post('/create', async (req,res)=>{
    const {email, password} = req.body;
    if(!email || !password) return res.send({error: 'Dados Insuficientes!'});

    try {
        if (await Users.findOne({email})) return res.send({error: 'Usuario ja registrado!'});
        
        const user = await Users.create(req.body);
        user.password = undefined;
        return res.send(user); 
    } 
    catch (error) {
        return res.send({error: 'Erro ao buscar usuario!'});
    }
});

router.post('/auth', async (req,res)=>{
    const {email, password} = req.body;
    
    if(!email || !password) return res.send({error: 'Dados Insuficientes!'});

    try {
        const user = await Users.findOne({email}).select('+password');
        if(!user) return res.send({error: 'Usuario nao registrado!'});

        const pass_ok = await  bcrypt.compare(password, user.password);

        if(!pass_ok) return res.send({error: 'Erro ao autenticar usuario!'});

        user.password = undefined;
        return res.send(user);
    } 
    catch (error) {
        return res.send({error: 'Erro ao buscar usuario!'});
    }    
});









module.exports = router;