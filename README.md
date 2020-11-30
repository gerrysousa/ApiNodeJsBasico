# ApiNodeJsBasico
Curso básico de APIs com Nodejs + Express + Mongodb

Para iniciar o projeto node.js executar o comando abaixo:
$ npm init

-------------------------------
PS C:\workspace\ApiNodeJsBasico> cd .\aula01\
PS C:\workspace\ApiNodeJsBasico\aula01> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (aula01) api_nodejs
version: (1.0.0)
description: descricao do projeto
entry point: (index.js) app.js
test command:
git repository: https://github.com/gerrysousa/ApiNodeJsBasico
keywords:
author: Gerry Sousa
license: (ISC)
About to write to C:\workspace\ApiNodeJsBasico\aula01\package.json:

{
  "name": "api_nodejs",
  "version": "1.0.0",
  "description": "descricao do projeto",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/gerrysousa/ApiNodeJsBasico.git"
  },
  "author": "Gerry Sousa",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/gerrysousa/ApiNodeJsBasico/issues"
  },
  "homepage": "https://github.com/gerrysousa/ApiNodeJsBasico#readme"
}


Is this OK? (yes) y
PS C:\workspace\ApiNodeJsBasico\aula01> 
-------------------------------

Instalar o framework Expresso no projeto
Executar o comando
$ npm install express --save
PS C:\workspace\ApiNodeJsBasico\aula01> npm install express --save

-------------------------------
Aula03

Instalar o mongoose no projeto
Executar o comando
$ npm install mongoose --save
PS C:\workspace\ApiNodeJsBasico\aula01> npm install mongoose --save

Instalar o body-parser no projeto
Executar o comando
$ npm install body-parser --save
PS C:\workspace\ApiNodeJsBasico\aula01> npm install body-parser --save

-------------------------------
Aula06
Instalar o bcrypt no projeto
Executar o comando
$ npm install bcrypt --save
PS C:\workspace\ApiNodeJsBasico\aula01> npm install bcrypt --save

-------------------------------
Aula08
Instalar o jsonwebtoken no projeto
Executar o comando
$ npm install bcrjsonwebtokenypt --save
PS C:\workspace\ApiNodeJsBasico\aula01> npm install jsonwebtoken --save


-------------------------------
Aula10
Comando para setar o ambiente de ao qual se deseja trabalhar (envs: dev, hml, prd)
$ set NODE_ENV=prod