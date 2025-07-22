import { BadRequestError } from "src/shared/application/errors/bad-request-error";
import { ConflictError } from "src/shared/application/errors/conflict-error";
import { CreatePlanInput } from "src/shared/application/inputs/plan/create-plan.input";
import { PlanOutput } from "src/shared/application/output/plan.output";
import { UseCase } from "src/shared/application/usecase/usecase";
import { Plan } from "../../domain/entities/plan.entity";
import { PlanRepository } from "../../domain/repositories/plan.repository";

type Input = CreatePlanInput;

type Output = PlanOutput;

export class CreatePlanUseCase implements UseCase<Input, Output> {
  constructor(private readonly planRepository: PlanRepository) { }

  async execute(input: Input): Promise<Output> {

    const existPlan = await this.planRepository.findByName(input.name);

    if (existPlan) {
      throw new ConflictError(`Já existe um plano com esse nome`);
    }

    const planEntity = Plan.create(input);

    const createPlan = await this.planRepository.create(planEntity);

    if (!createPlan) {
      throw new BadRequestError(`Ocorreu um erro ao criar o plano`);
    }

    const output: Output = {
      id: createPlan.id,
      name: createPlan.name,
      description: createPlan.description,
      value: createPlan.value,
    }

    return output;
  }
}