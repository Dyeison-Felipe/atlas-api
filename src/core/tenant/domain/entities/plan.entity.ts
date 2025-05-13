import { Data } from "src/shared/decorators/data.decorator";
import { Entity, EntityProps } from "src/shared/domain/entities/auditable.entity";

export type PlanProps = EntityProps & {
    name: string;
    description: string;
    price: number;
    duration: number;
}

@Data()
export class Plan extends Entity<PlanProps> {


    constructor(props: EntityProps & PlanProps) {
        super(props);
    }

    static create(plan: PlanProps): Plan {
        const planCreate: PlanProps = {
            id: plan.id,
            name: plan.name,
            description: plan.description,
            price: plan.price,
            duration: plan.duration,
            createdAt: plan.createdAt,
            updatedAt: plan.updatedAt,
            deletedAt: plan.deletedAt,
        }

        const newPlan = new Plan(planCreate);

        return newPlan;
    }

}
