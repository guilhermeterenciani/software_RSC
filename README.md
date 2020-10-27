# software_RSC

# CÓDIGOS:

# 1- npm install express (ajuda a trabalhar com rotas, cria node_modules e package-lock.json)

# 2- npm install @type/express -D (biblioteca de definição de tipos no express, uma ajuda no processo de digitalização)

# 3- npm install ts-node -D (para entender typescript)

# 4- npx tsc --init (cria um arquivo de configuração do typescript)

# 5- Dentro do package.json criar uma função dentro do "scripts" chamado "dev" com a função de rodar sempre "ts-node-dev src/server.ts" digitar "npm run dev" no terminal, assim rodará de forma mais simplificada o servidor

# 6- npx create-react-app "nome da pasta" --template=typescript cria uma estrutura React usada para Front-end

# 7- npm install sqlite3 (pacote de BD)

# 8- npm install knex (escrever e criar tabelas usando typescript)

# 9- npx knex migrate:latest --knexfile (nome do arquivo criado) migrate:latest(usado para usar achar o caminho ate o knexfile, assim ele irá criar um arquivo database.sqlite com a tabela que armazenará os dados) (atenção: colocar useNullAsDefault:true no knexfile e no connection.ts)

# 10- npm install cors (define quais rotas vao ter acesso a nossa API)

# 11- npm install @types/cors -D (biblioteca de definição de tipos no cors)

# FRONT-END
# - npm install axios (permite fazer requisições para o back-end a partir do API) (atenção: da para fazer sem nenhuma biblioteca, ela permite criar uma baseURL que se repete em todas requisições, assim se precisar mudar basta somente mudar na baseURL que automaticamente mudará em todas as outras)

# MIGRATE:
# - Dentro do package.json criar uma função dentro do "scripts" chamado "knex:migrate" com a função de rodar sempre "knex --knexfile (nome do arquivo criado) migrate:latest" ao digitar "npm run knex:migrate" no terminal, assim criará o database de forma mais simplificada

# SEED:
# - Dentro do package.json criar uma função dentro do "scripts" chamado "knex:seed" com a função de rodar sempre "knex --knexfile (nome do arquivo criado) seed:run" ao digitar "npm run knex:seed" no terminal, assim criará a seed de forma mais simplificada

# INFORMAÇÕES:
# 1- npx serve para executar pacotes do Node

# EXTENSÕES:
# 1- sqlite (ajuda em ver a tabela no database.sqlite)