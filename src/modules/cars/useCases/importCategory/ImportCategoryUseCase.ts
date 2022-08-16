import fs from 'fs'
import { parse as csvParse}  from "csv-parse"
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
    name: string,
    description: string
}

class ImportCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) { }



    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
        return new Promise((resolve, reject) => {
            // desta parte para baixo vamos começar a leitura do arquivo utilizando stream
            const stream = fs.createReadStream(file.path)
            const categories: IImportCategory[] = []

            const parseFile = csvParse()
            // o stream passa todos os dados para dentro do parseFile
            stream.pipe(parseFile)

            

            parseFile.on("data", (line) => {
                // pelo parseFile lemos o chunk do arquivo no caso linha a linha
                // e cada dado passado para a variavel está na mesma ordem que
                // esta escrito na desestruturação exemplo
                // se o arquivo que vamos ler temos [a,b,c] a desestruturação deve seguir
                // a mesma ordem para receber os valores [letra A, letra B, letra C]
                // podemos mudar a ordem da desestruturação mas não vai mudar como ela
                // é districuida para elas podendo ter até mesmo outro nome de variavel.
                const [name, description] = line
                console.log(name, description);

                categories.push({
                    name,
                    description
                })
            })
            .on("end", ()=>{
                resolve(categories)
                // após realizar a leitura do arquivo vamos apagar ele
                // para isso precisamos somente passar o path do arquivo
                fs.promises.unlink(file.path)
            })
            .on("error", (err) => {
                reject(err)
            })

            return categories
        })
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file)
        

        categories.map( category => {
            const { name, description } = category;

            const existCategory = this.categoriesRepository.findByName(name)

            if(!existCategory) {
                this.categoriesRepository.create({
                    name,
                    description,
                })
            }
        })

    }
}

export { ImportCategoryUseCase }