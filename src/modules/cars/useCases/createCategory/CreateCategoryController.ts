import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";



class CreateCategoryController {

    constructor( private createCategoryUseCase: CreateCategoryUseCase) {}

    hanlde(request: Request, response: Response): Response {
        const { name, description } = request.body;

        // const createCategoryService = new CreateCategoryUseCase(categoriesRepository)
        this.createCategoryUseCase.execute({name, description})


        // sempre que retornamos uma resposta ela deve retornar
        // o status sempre e deve tambem colocar um formato de
        // resposta seja send() ou json() como vemos abaixo no Ex:

        // qualquer uma das forma vai funcionar o send() retorna conteudo como html e o 
        // json() retorna dados que serão utilizados na aplicação.
        // return response.status(201).json(categories)
        return response.status(201).send()
    }
}


export { CreateCategoryController }