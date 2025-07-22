// import { Test, TestingModule } from '@nestjs/testing';
// import { Repository } from 'typeorm';
// import { PlanSchema } from '../../schema/plan.schema';
// import { PlanMapper } from '../mappers/plan-mapper';
// import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';

// describe('PlanMapper', () => {
//   let module: TestingModule;
//   let planRepository: Repository<PlanSchema>;
//   let sut: PlanMapper;

//   beforeAll(async () => {
//     module = await Test.createTestingModule({
//       imports: [TypeOrmModule.forFeature([PlanSchema])],
//     }).compile();

//     planRepository = module.get<Repository<PlanSchema>>(getRepositoryToken(PlanSchema));
//   })

//   beforeEach(async () => {
//     sut = new PlanMapper();
//     await planRepository.clear();
//   });

//   it('should map schema to entity', async () => {
//     const props: PlanSchema = {

//     }
//   })
// })