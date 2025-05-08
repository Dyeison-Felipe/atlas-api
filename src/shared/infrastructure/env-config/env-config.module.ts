import { DynamicModule, Global, Module } from "@nestjs/common";
import { ConfigModule, ConfigModuleOptions, ConfigService } from "@nestjs/config";
import { EnvConfigService } from "./env-config.service";
import { join } from "node:path";
import { Providers } from "src/shared/application/constants/providers";

@Global()
@Module({
    imports: [ConfigModule],
    providers: [{
        provide: Providers.ENV_CONFIG,
        useFactory: (configService: ConfigService) => {
            return new EnvConfigService(configService);
        },
        inject: [ConfigService],
    }],
    exports: [Providers.ENV_CONFIG],
})
export class EnvConfigModule extends ConfigModule {
    static forRoot(options: ConfigModuleOptions = {}): Promise<DynamicModule> {
        return super.forRoot({
            ...options,
            envFilePath: [
                join(__dirname, `../../../../.env.${process.env.NODE_ENV}`)
            ]
        })
    }
}