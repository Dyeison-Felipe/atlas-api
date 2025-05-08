import { Injectable } from "@nestjs/common";
import { EnvConfig } from "../../domain/env-config.interface";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class EnvConfigService implements EnvConfig {

    constructor(private readonly configService: ConfigService) {}

    getPort(): number {
        return Number(this.configService.get<string>('PORT') as string);
    }

    getNodeEnv(): string {
        return this.configService.get<string>('NODE_ENV') as string;
    }

}