import { NestFastifyApplication } from "@nestjs/platform-fastify";
import { EnvConfig } from "./shared/application/services/env-config/env-config.service";
import { GlobalErrorFilter } from "./shared/infra/exeption-filters/global-error/global-error.filter";
import { NotFoundErrorFilter } from "./shared/infra/exeption-filters/not-found-error/not-found-error.filter";
import { ConflictErrorFilter } from "./shared/infra/exeption-filters/conflict-error/conflict-error.filter";
import { BadRequestErrorFilter } from "./shared/infra/exeption-filters/bad-request-error/bad-request-error.filter";
import { UnauthorizedErrorFilter } from "./shared/infra/exeption-filters/unauthorized-error/unauthorized-error.filter";
import { InvalidCredentialsErrorFilter } from "./shared/infra/exeption-filters/invalid-credentials-error/invalid-credentials-error.filter";
import { InvalidTokenErrorFilter } from "./shared/infra/exeption-filters/invalid-token-error/invalid-token-error.filter";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

export async function globalConfig(
  app: NestFastifyApplication,
  envConfigService: EnvConfig,
) {

  // Swagger Config
  const configSwagger = new DocumentBuilder()
    .setTitle('Atlas')
    .setDescription('ERP')
    .setVersion('1.0')
    .addTag('nfe')
    .build()
  const documentFactory = () => SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, documentFactory);

  // Global pipes config
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Config Errors
  app.useGlobalFilters(
    new GlobalErrorFilter(),
    new NotFoundErrorFilter(),
    new ConflictErrorFilter(),
    new BadRequestErrorFilter(),
    new UnauthorizedErrorFilter(),
    new InvalidTokenErrorFilter(),
    new InvalidCredentialsErrorFilter(),
  )
}