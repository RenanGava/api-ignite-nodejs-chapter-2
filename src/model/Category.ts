import { v4 as uuidv4} from "uuid"

class Category {
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    constructor() {
        // desta forma tiramos a responsabilidade da nossa rota de atribuir o id para a
        // categoria e deixamos a nossa classe fazer essa atribuição.
        if(!this.id) {
            this.id = uuidv4()
        }
    }
}

export { Category }