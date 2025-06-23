import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { globalConfig } from './global-config';
import { EnvConfigService } from './shared/infra/service/env-config/env-config.service';
import { PROVIDERS } from './shared/application/constants/providers';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(),);

  const envConfig = app.get(PROVIDERS.ENV_CONFIG);

  globalConfig(app, envConfig)

  await app.listen(envConfig.getPort(), '0.0.0.0');
  const url = await app.getUrl();
  const ambiente = envConfig.getNodeEnv();
  console.log(`🚀 Server is running in ${ambiente} ${url}`);
}
bootstrap();
