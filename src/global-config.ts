import { INestApplication } from "@nestjs/common"
import { EnvConfig } from "./shared/domain/env-config.interface"

export const globalConfig = async (app: INestApplication, envConfigService: EnvConfig) => {

}