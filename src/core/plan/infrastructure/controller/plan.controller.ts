import { Body, Controller, Post } from "@nestjs/common";
import { CreatePlanUseCase } from "../../application/usecases/create-plan.usecase";
import { CreatePlanDto } from "../dto/create-plan.dto";
import { ConvertPresenter } from "src/shared/infra/presenter/convert-presenter";
import { PlanPresenter } from "src/shared/infra/presenter/plan/plan.presenter";

@Controller('/api/plan/v1')
export class PlanController {
  constructor(private readonly createPlanUseCase: CreatePlanUseCase) { }

  @Post('/create')
  async create(@Body() planDto: CreatePlanDto): Promise<PlanPresenter> {
    const execute = await this.createPlanUseCase.execute(planDto);

    const presenter = ConvertPresenter.toPresenter(execute, PlanPresenter);

    return presenter;
  }
}