import { PlanOutput } from "src/shared/application/output/plan.output";

export class PlanPresenter {
  id: string;
  name: string;
  description: string;
  value: string;
  constructor(plan: PlanOutput) {
    this.id = plan.id;
    this.description = plan.description;
    this.name = plan.name;
    this.value = plan.value;
  }
}