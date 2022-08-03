import { CategoryRepository } from "../repositories/CategoryRepository";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * [x] - precisamos definir o tipo de retorno da classe
 * [x] - alterar retorno de erro
 * [x] - acessar o repositorio
 */

class CreateCategoryService {

    // fazendo dessa forma conseguimos receber o método instanciado
    // na rota de categorias.
    //OBS: dessa forma abaixo é um hack do JS para declarar uma inversão de 
    // dependencia.
    constructor(private categoriesRepository: ICategoriesRepository) {

    }
    
    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if (categoryAlreadyExists) {
            // sempre que tivermos um erro dentro de service vamos utilizar o
            // método abaixo
            // return response.status(400).json({ message: "category already exists" })
            throw new Error("Category Already Exists!")
        }


        // aqui estamos recebendo a classe e executando seu método create
        // para a conseguirmor cadastrar a categoria.
        this.categoriesRepository.create({ name, description })

    }
}

export { CreateCategoryService }