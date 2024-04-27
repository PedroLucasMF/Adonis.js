#Adonis
//baixar a instenção no vs code: SQLlite Viewer

// comando para instalação 

//apagar better- em config/database e instalar o comando baixo:
- npm i sqlite3

//criar a pasta tmp após o git clone


//não é obrigatorio mas ele cria as tabelas do banco de dados
node ace migration:run
node ace make:migration Produto
node ace migration:rollback
node ace migration: refresh //apaga completamente o banco e refaz ele, n usar de jeito nenhum

---
npm init adonisjs@latest hello-world
-
selecionar as opçoes:
- api
- token
- mysql

//resolução do problema do migration
npm i better-sqlite3

//execuçaõ do migration
node ace migration:run

//rodar
npm run dev

----
//apos excluir o database criado pelo script excute o comando abaixo:
node ace configure @adonisjs/lucid
-
selecione as opções:
- sqlight
- false

---
#Facilitadores
-
//Esses comandos permitem uma criação rapida de itens necessarios pro que vc deseja
-
node ace make:controller users
-
//criação rapida de controller
-
node ace make:model Produto
-
//Cria uma model

----

#Utilidades
-
node ace list:routes
-
//serve para listas todas as rotas criadas
-
//inves de cadastrar cada um dos routes usando get, put, post etc bote resource que ele criara tds as routes, sendo necessario apenas que vc crie os metados, usando .apionly() é criado apenas routes de modo api, as de metado web são ignoradas. exemplo a abaixo
-
router.resource('/users', UsersController)