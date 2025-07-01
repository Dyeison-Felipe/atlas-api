import { Module } from '@nestjs/common';
import { EnvConfigModule } from './shared/infra/service/env-config/env-config.module';
import { DatabaseModule } from './shared/infra/database/database.module';
import { PlanModule } from './core/plan/infrastructure/plan.module';

@Module({
  imports: [EnvConfigModule, DatabaseModule, PlanModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
