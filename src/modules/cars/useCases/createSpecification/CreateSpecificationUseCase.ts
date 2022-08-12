import { ISpecifictionRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string
}

class CreateSpecificationUseCase {

    constructor(private specificationRepository: ISpecifictionRepository) {}

    execute({ name, description }: IRequest) {

        const specificationAlreadyExists = this.specificationRepository.findByName(name)

        if(specificationAlreadyExists){
            throw new Error("Specification Already Exists!")
        }

        this.specificationRepository.create({
            name,
            description
        })
    }
}

export { CreateSpecificationUseCase }