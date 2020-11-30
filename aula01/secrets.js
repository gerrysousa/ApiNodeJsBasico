const env = process.env.NODE_ENV || 'dev';

const secrets =() =>{
    switch(env){
        case 'dev':
        return{
            mongo_password: "xxxxxxxxxxx",
            mongo_user:"userName"
        }

        case 'hml':
        return{
            mongo_password: "xxxxxxxxxxx",
            mongo_user:"userName"
        }

        case 'prd':
        return{
            mongo_password: "xxxxxxxxxxx",
            mongo_user:"userName"
        }
    }
} 


module.exports = secrets();