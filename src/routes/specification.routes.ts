import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
const specificationRoutes = Router();

const specificationRepository = new SpecificationsRepository()

specificationRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response)
})

export { specificationRoutes }