const express = require('express');
const routes = require('./routes')

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

/*
Metodos HTTP:

GET: Busca uma informação do back-end
POST: Cria uma informação no back-end
PUT: Altera uma informação no bac-end
DELETE: Deleta uma informação no back-end

Tipos de parâmetros:

Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
Route Params: Parâmetros ultilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos


*/