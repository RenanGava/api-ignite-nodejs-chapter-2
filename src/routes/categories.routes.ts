import { Router } from "express"
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router();
const upload = multer({
    dest:"./tmp"
})
// após trocarmos a definição do tipo par ICategoryRepository nós podemos utilizar
// tanto o PostgresCategoriesRepository() tanto o CategoryRepository() são 
// implementados utilizando a interface ICategoryRepository portanto tem o mesmo tipo
// por isso funcionam da mesma maneira.
// const  categoriesRepository = new PostgresCategoriesRepository()



categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.hanlde(request, response)
})

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import",upload.single("file") , (request, response) => {
    return importCategoryController.handle(request, response)
})

export { categoriesRoutes }