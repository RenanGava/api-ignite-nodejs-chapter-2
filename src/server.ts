import express from "express";
import swaggerUi from 'swagger-ui-express'

import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express()

app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

/* Rotas relacionadas a categorias !! */
// colocando o "/categories" aqui dentro do arquivo
// categories.routes.ts vamos precisar passar apenas os caminhos
// após a rota "/categories"
// exemplo dentro do arquivo vamos colocar apenas "/" e o restante da rota se hover
// se não ele vai funcionar como se fosse a rota categories

// resumindo o "/categories" será o caminho inicial da rota categories.routes.ts
app.use(router)

app.listen(3333, () => console.log("rodando"))