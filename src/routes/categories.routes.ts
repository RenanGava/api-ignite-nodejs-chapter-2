import { Router } from "express"
import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";

const categoriesRoutes = Router();
// após trocarmos a definição do tipo par ICategoryRepository nós podemos utilizar
// tanto o PostgresCategoriesRepository() tanto o CategoryRepository() são 
// implementados utilizando a interface ICategoryRepository portanto tem o mesmo tipo
// por isso funcionam da mesma maneira.
// const  categoriesRepository = new PostgresCategoriesRepository()
const  categoriesRepository = new CategoryRepository()



categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.hanlde(request, response)
})

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list()

    return response.json(all)

})

export { categoriesRoutes }