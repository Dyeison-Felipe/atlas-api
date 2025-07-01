import { Data } from "src/shared/domain/decorators/data.decorator";
import { BaseEntity } from "src/shared/domain/entity/base-entity";

export type PlanProps = {
  name: string;
  description: string;
  value: string;
}

type CreatePlan = PlanProps;

export interface Plan extends PlanProps {}

@Data()
export class Plan extends BaseEntity<PlanProps> {

  static create(props: CreatePlan): Plan {
    return new Plan({
      name: props.name,
      description: props.description,
      value: props.value,
    })
  }
}