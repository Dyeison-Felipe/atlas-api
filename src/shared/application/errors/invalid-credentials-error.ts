export class InvalidCredentialError extends Error {
    constructor(readonly message: string) {
        super(message);
        this.name = 'InvalidCredentialsError';
    }
}