export type NodeEnv = 'production' | 'development' | 'test';

export interface EnvConfig {
    getPort(): number;
    getDbPort(): number;
    getDbUsername(): string;
    getDbPassword(): string;
    getDbHost(): string;
    getDatabase(): string;
    getNodeEnv(): NodeEnv;
}