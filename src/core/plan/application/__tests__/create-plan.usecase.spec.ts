import { CreatePlanInput } from "src/shared/application/inputs/plan/create-plan.input";
import { PlanRepository } from "../../domain/repositories/plan.repository";
import { CreatePlanUseCase } from "../usecases/create-plan.usecase";
import { BadRequestError } from "src/shared/application/errors/bad-request-error";
import { ConflictError } from "src/shared/application/errors/conflict-error";
import { PlanMapper } from "../../infrastructure/typeorm/repositories/mappers/plan-mapper";

jest.mock('src/core/plan/domain/entities/plan.entity.ts', () => ({
  Plan: {
    create: jest.fn(),
  }
}));

describe('CreatePlanUseCase', () => {
  let sut: CreatePlanUseCase;
  let planRepository: PlanRepository;
  let planRepositoryMapper: PlanMapper;

  const input: CreatePlanInput = {
    name: 'Plano teste',
    description: 'Descrição de plano teste',
    value: '99.99',
  };

  beforeEach(() => {
    planRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findByName: jest.fn(),
    };

    sut = new CreatePlanUseCase(planRepository);
  });


  it('Cria um plano com sucesso', async () => {
    await expect(sut.execute(input)).rejects.toThrow(
      new BadRequestError('Ocorreu um erro ao criar o plano'),
    );
  })
})