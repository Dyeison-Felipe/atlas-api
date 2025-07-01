import { PlanRepository } from "src/core/plan/domain/repositories/plan.repository";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from "src/core/plan/domain/entities/plan.entity";
import { PlanSchema } from "../schema/plan.schema";
import { PlanMapper } from "./mappers/plan-mapper";


export class PlanRepositoryImpl implements PlanRepository {
  constructor(
    @InjectRepository(PlanSchema)
    private readonly planRepository: Repository<PlanSchema>,
    private readonly planMapper: PlanMapper,
  ) { }

  async create(entity: Plan): Promise<Plan | null> {
    const plan = await this.planRepository.save(entity);

    if (!plan) return null;

    const planEntity = this.planMapper.toEntity(plan);

    return planEntity;

  }
  async findById(id: string): Promise<Plan | null> {
    const plan = await this.planRepository.findOneBy({
      id
    })

    if (!plan) return null;

    const planEntity = this.planMapper.toEntity(plan);

    return planEntity;

  }

  async findByName(name: string): Promise<Plan | null> {
    const plan = await this.planRepository.findOneBy({
      name
    })

    if(!plan) return null;

    const planEntity = this.planMapper.toEntity(plan);

    return planEntity;
  }
}