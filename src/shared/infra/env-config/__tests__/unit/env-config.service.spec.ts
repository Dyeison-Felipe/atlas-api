import { PROVIDERS } from "src/shared/application/constants/providers";
import { EnvConfigModule } from "../../env-config.module";
import { EnvConfigService } from "../../env-config.service"
import { Test, TestingModule } from "@nestjs/testing";
import { ConfigService } from "@nestjs/config";

describe('EnvConfigService unit tests', () => {
  let sut: EnvConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [EnvConfigModule.forRoot()],
      providers: [
        {
          provide: PROVIDERS.ENV_CONFIG,
          useFactory: (configService: ConfigService) => {
            return new EnvConfigService(configService);
          },
          inject: [ConfigService],
        },
      ],
    }).compile();

    sut = module.get<EnvConfigService>(PROVIDERS.ENV_CONFIG);
  });

  it('Should be defined', () => {
    expect(sut).toBeDefined();
  })

  it('Should return the viraible PORT', () => {
    expect(sut.getPort()).toBe(3333);
  });

  it('Should return the viraible DB_PORT', () => {
    expect(sut.getDbPort()).toBe(5432);
  });

  it('Should return the viraible DB_HOST', () => {
    expect(sut.getDbHost()).toBe('localhost');
  });

  it('Should return the viraible DB_USERNAME', () => {
    expect(sut.getDbUsername()).toBe('dyeison_test');
  });

  it('Should return the viraible DB_PASSWORD', () => {
    expect(sut.getDbPassword()).toBe('senha_test');
  });

  it('Should return the viraible DB_DATABASE', () => {
    expect(sut.getDatabase()).toBe('atlas');
  });

  it('Should return the viraible NODE_ENV', () => {
    expect(sut.getNodeEnv()).toBe('development');
  });
})