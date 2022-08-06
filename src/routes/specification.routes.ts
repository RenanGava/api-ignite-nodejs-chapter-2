import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpeificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();

const specificationRepository = new SpecificationsRepository()

specificationRoutes.post("/", (request, response) => {
    
    const { name, description } = request.body

    const createSpecificationService = new CreateSpeificationService(specificationRepository)

    createSpecificationService.execute({ name, description})

    return response.status(201).send()
})

export { specificationRoutes }