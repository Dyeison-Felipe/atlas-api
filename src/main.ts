import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Providers } from './shared/application/constants/providers';
import { globalConfig } from './global-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const envConfig = app.get(Providers.ENV_CONFIG);

  await globalConfig(app, envConfig);

  await app.listen(envConfig.getPort(), '0.0.0.0');
}
bootstrap();
