import { Router } from "express"
import { CategoryRepository } from "../repositories/CategoryRepository";
import { PostgresCategoriesRepository } from "../repositories/PostgresCategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
// após trocarmos a definição do tipo par ICategoryRepository nós podemos utilizar
// tanto o PostgresCategoriesRepository() tanto o CategoryRepository() são 
// implementados utilizando a interface ICategoryRepository portanto tem o mesmo tipo
// por isso funcionam da mesma maneira.
// const  categoriesRepository = new CategoryRepository()
const  categoriesRepository = new PostgresCategoriesRepository()



categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository)

    createCategoryService.execute({ name, description })
    
    // sempre que retornamos uma resposta ela deve retornar
    // o status sempre e deve tambem colocar um formato de
    // resposta seja send() ou json() como vemos abaixo no Ex:

    // qualquer uma das forma vai funcionar o send() retorna conteudo como html e o 
    // json() retorna dados que serão utilizados na aplicação.
    // return response.status(201).json(categories)
    return response.status(201).send()

})

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list()

    return response.json(all)

})

export { categoriesRoutes }