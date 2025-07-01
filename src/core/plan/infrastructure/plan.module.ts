import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PlanSchema } from "./typeorm/schema/plan.schema";
import { PlanController } from "./controller/plan.controller";
import { CreatePlanUseCase } from "../application/usecases/create-plan.usecase";
import { PlanRepository } from "../domain/repositories/plan.repository";
import { PROVIDERS } from "src/shared/application/constants/providers";
import { PlanRepositoryImpl } from "./typeorm/repositories/plan.repository";
import { PlanMapper } from "./typeorm/repositories/mappers/plan-mapper";

@Module({
  imports: [TypeOrmModule.forFeature([PlanSchema])],
  controllers: [PlanController],
  providers: [
    PlanMapper,
    {
      provide: CreatePlanUseCase,
      useFactory: (planRespository: PlanRepository) => {
        return new CreatePlanUseCase(planRespository);
      },
      inject: [PROVIDERS.PLAN, PROVIDERS.PLAN_MAPPER],
    },
    {
      provide: PROVIDERS.PLAN,
      useClass: PlanRepositoryImpl,
    },
    {
      provide: PROVIDERS.PLAN_MAPPER,
      useClass: PlanMapper,
    }

  ],
  exports: [PROVIDERS.PLAN],
})
export class PlanModule { }