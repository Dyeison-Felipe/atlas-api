import { Plan } from "../entities/plan.entity";

export interface PlanRepository {
  create(entity: Plan): Promise<Plan | null>;
  findById(id: string): Promise<Plan | null>;
  findByName(name: string): Promise<Plan | null>;
}