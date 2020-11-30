const secrets = require('../secrets');

const env = process.env.NODE_ENV || 'dev';
const config =() =>{
    switch(env){
        case 'dev':
        return{
            bd_string: `mongodb+srv://${secrets.mongo_user}:${secrets.mongo_password}@clusterapinodejsbasico.f13tn.mongodb.net/test?retryWrites=true&w=majority`,
            jwt_pass: "batatateste2020",
            jwt_expires_in: "7d"
        }

        case 'hml':
        return{
            bd_string: `mongodb+srv://${secrets.mongo_user}:${secrets.mongo_password}@clusterapinodejsbasico.f13tn.mongodb.net/test?retryWrites=true&w=majority`,
            jwt_pass: "batatateste2020",
            jwt_expires_in: "7d"
        }

        case 'prd':
        return{
            bd_string: `mongodb+srv://${secrets.mongo_user}:${secrets.mongo_password}@clusterapinodejsbasico.f13tn.mongodb.net/test?retryWrites=true&w=majority`,
            jwt_pass: "234t5yjhgfdfdgy7i87654gt678u",
            jwt_expires_in: "7d"
        }
    }
} 

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();