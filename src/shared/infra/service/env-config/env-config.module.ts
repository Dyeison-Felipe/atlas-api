import { DynamicModule, Global, Module } from '@nestjs/common';
import {
    ConfigModule,
    ConfigModuleOptions,
    ConfigService,
} from '@nestjs/config';
import { join } from 'node:path';
import { EnvConfigService } from './env-config.service';
import { PROVIDERS } from 'src/shared/application/constants/providers';

@Global()
@Module({
    imports: [ConfigModule, EnvConfigModule],
    providers: [
        {
            provide: PROVIDERS.ENV_CONFIG,
            useFactory: (configService: ConfigService) => {
                return new EnvConfigService(configService);
            },
            inject: [ConfigService],
        },
    ],
    exports: [PROVIDERS.ENV_CONFIG],
})
export class EnvConfigModule extends ConfigModule {
    static forRoot(options: ConfigModuleOptions = {}): Promise<DynamicModule> {
        return ConfigModule.forRoot({
            isGlobal: true,
            ...options,
            envFilePath: [
                join(__dirname, `../../../../../.env.${process.env.NODE_ENV}`),
            ],
        });
    }
}