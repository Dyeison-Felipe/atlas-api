import { ConfigService } from "@nestjs/config";
import { EnvConfig, NodeEnv } from "src/shared/application/services/env-config/env-config.service";

export class EnvConfigService implements EnvConfig {

    constructor(private readonly configService: ConfigService) { }
    getDatabase(): string {
        return this.configService.get<string>('DB_DATABASE') as string;
    }

    getPort(): number {
        return Number(this.configService.get<string>('PORT') as string);
    }
    getDbPort(): number {
        return Number(this.configService.get<string>('DB_PORT') as string);
    }
    getDbUsername(): string {
        return this.configService.get<string>('DB_USERNAME') as string;
    }
    getDbPassword(): string {
        return this.configService.get<string>('DB_PASSWORD') as string;
    }
    getDbHost(): string {
        return this.configService.get<string>('DB_HOST') as string;
    }

    getNodeEnv(): NodeEnv {
        return this.configService.get<NodeEnv>('NODE_ENV') as NodeEnv;
    }

}