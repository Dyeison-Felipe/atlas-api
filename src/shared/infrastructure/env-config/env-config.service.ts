import { Injectable } from "@nestjs/common";
import { EnvConfig } from "../../domain/env-config.interface";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class EnvConfigService implements EnvConfig {

    constructor(private readonly configService: ConfigService) { }
    getDbHost(): string {
        return this.configService.get<string>('DATABASE_HOST') as string;
    }
    getDbPort(): number {
        return Number(this.configService.get<string>('DATABASE_PORT') as string)
    }
    getDbUser(): string {
        return this.configService.get<string>('DATABASE_USER') as string;
    }
    getDbPassword(): string {
        return this.configService.get<string>('DATABASE_PASSWORD') as string;
    }
    getDbName(): string {
        return this.configService.get<string>('DATABASE_NAME') as string;
    }

    getPort(): number {
        return Number(this.configService.get<string>('PORT') as string);
    }

    getNodeEnv(): string {
        return this.configService.get<string>('NODE_ENV') as string;
    }

}