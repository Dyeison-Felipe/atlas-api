export interface EnvConfig {
    getPort(): number;
    getNodeEnv(): string;
    getDbHost(): string;
    getDbPort(): number;
    getDbUser(): string;
    getDbPassword(): string;
    getDbName(): string;
}