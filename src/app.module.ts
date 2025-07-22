import { Module } from '@nestjs/common';
import { PlanModule } from './core/plan/infrastructure/plan.module';
import { DatabaseModule } from './shared/infra/database/database.module';
import { EnvConfigModule } from './shared/infra/env-config/env-config.module';

@Module({
  imports: [EnvConfigModule, DatabaseModule, PlanModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
