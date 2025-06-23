import { Module } from '@nestjs/common';
import { EnvConfigModule } from './shared/infra/service/env-config/env-config.module';
import { DatabaseModule } from './shared/infra/database/database.module';

@Module({
  imports: [EnvConfigModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
