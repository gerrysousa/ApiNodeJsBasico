const jwt = require('jsonwebtoken');

const token = (req, res, next) => {
    const token_header = req.headers.token;
    if(!token_header) return res.send({error: 'Token não enviado!'});

    jwt.verify(token_header, 'batatateste2020', (err, decoded) =>{
        if(err) return res.send({error: 'Token invalido!'});
        res.locals.auth_data = decoded;
        return next();
    });
}

module.exports = token;