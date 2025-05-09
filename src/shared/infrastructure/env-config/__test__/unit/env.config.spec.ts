import { Providers } from "src/shared/application/constants/providers";
import { EnvConfigModule } from "../../env-config.module";
import { EnvConfigService } from "../../env-config.service"
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from "@nestjs/config";

describe('EnvConfigService unit tests', () => {
    // clase princpal que esta sendo testada
    let sut: EnvConfigService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [EnvConfigModule.forRoot()],
            providers: [
				{
					provide: Providers.ENV_CONFIG,
					useFactory: (configService: ConfigService) => {
						return new EnvConfigService(configService);
					},
					inject: [ConfigService],
				},
			],
        }).compile()

        sut = module.get<EnvConfigService>(Providers.ENV_CONFIG);
    })

    it('should be defined', () => {
        expect(sut).toBeDefined()
    })

    it('should return the variable PORT', () => {
        expect(sut.getPort()).toBe(3000);
    })

    it('should return the variable NODE_ENV', () => {
        expect(sut.getNodeEnv()).toBe('test');
    })

    it('should return the variable DATABASE_HOST', () => {
        expect(sut.getDbHost()).toBe('localhost');
    })

    it('should return the variable DATABASE_PORT', () => {
        expect(sut.getDbPort()).toBe(5432);
    })

    it('should return the variable DATABASE_NAME', () => {
        expect(sut.getDbName()).toBe('atlas');
    })

    it('should return the variable DATABASE_USER', () => {
        expect(sut.getDbUser()).toBe('user_test');
    })

    it('should return the variable DATABASE_PASSWORD', () => {
        expect(sut.getDbPassword()).toBe('db_password');
    })
})