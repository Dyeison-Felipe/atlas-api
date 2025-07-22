import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '.',
  modulePaths: ['<rootDir>'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: '<rootDir>/',
	}),
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};

export default config;
