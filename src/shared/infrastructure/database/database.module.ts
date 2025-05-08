import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Providers } from "src/shared/application/constants/providers";
import { EnvConfigService } from "../env-config/env-config.service";

@Module({
    imports: [TypeOrmModule.forRootAsync({
        inject: [Providers.ENV_CONFIG],
        useFactory: (envConfigService: EnvConfigService) => ({
            type: 'postgres',
            host: envConfigService.getDbHost(),
            port: envConfigService.getDbPort(),
            username: envConfigService.getDbUser(),
            password: envConfigService.getDbPassword(),
            database: envConfigService.getDbName(),
            entities: [],
            synchronize: false,
            migrations: ['src/shared/infrastructure/database/migrations/*.ts'],
            migrationsRun: true, 
        })
        
    }),],
})
export class DatabaseModule {}