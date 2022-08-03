import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express()

app.use(express.json())

/* Rotas relacionadas a categorias !! */
// colocando o "/categories" aqui dentro do arquivo
// categories.routes.ts vamos precisar passar apenas os caminhos
// após a rota "/categories"
// exemplo dentro do arquivo vamos colocar apenas "/" e o restante da rota se hover
// se não ele vai funcionar como se fosse a rota categories

// resumindo o "/categories" será o caminho inicial da rota categories.routes.ts
app.use("/categories", categoriesRoutes)

app.listen(3333, () => console.log("rodando"))