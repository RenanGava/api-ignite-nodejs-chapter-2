import { Specification } from "../model/Specification";

interface ICreateISpecificationDTO {
    name: string;
    description: string;
}

interface ISpecifictionRepository {
    
    create({ name, description}: ICreateISpecificationDTO):void;

    findByName(name: string): Specification
}

export { ISpecifictionRepository, ICreateISpecificationDTO }