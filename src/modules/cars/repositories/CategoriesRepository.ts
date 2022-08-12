import { Category } from "../model/Category"
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";


// DTO => Data Transfer Object




// dessa forma o CategoryRepository vai virar um subtipo de ICategoriesRepository
// OBS: para uma classe se tornar um subtipo ela deve utlizar o implements como abaixo.
class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[]

    private static INSTANCE: CategoriesRepository

    private constructor() {
        this.categories = []
    }

    public static getInstance():CategoriesRepository {
        if(!CategoriesRepository.INSTANCE){
            CategoriesRepository.INSTANCE = new CategoriesRepository()
        }

        return CategoriesRepository.INSTANCE
    }

    create( { description, name}: ICreateCategoryDTO ): void {
        const category = new Category()
        // podemos fazer dessa forma menos convencional
        // category.name = name
        // category.description = description
        // category.created_at = new Date()

        // forma mais convencional e menos verbosa de se passar os valores oara category
        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })


        this.categories.push(category)
    }

    list(): Category[] {
        
        return this.categories
    }

    findByName(name: string):Category {
        // podemos utilizar o método do javascript filter() também que irá funcionar.
        const category = this.categories.find( category => category.name === name)

        return category
    }
}

export { CategoriesRepository }