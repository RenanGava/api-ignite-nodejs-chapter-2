import { Specification } from "../../model/Specification";
import { ISpecifictionRepository, ICreateISpecificationDTO } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecifictionRepository {

    private specifications: Specification[];

    constructor() {
        this.specifications = []
    }

    create({ name, description }: ICreateISpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name, 
            description,
            created_at: new Date()
        })

        this.specifications.push(specification)
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find( specification => {
            return specification.name === name
        })

        return specification
    }

}

export { SpecificationsRepository }