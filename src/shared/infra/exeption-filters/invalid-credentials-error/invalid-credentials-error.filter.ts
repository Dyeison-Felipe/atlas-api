import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { FastifyReply } from "fastify";
import { InvalidCredentialError } from "src/shared/application/errors/invalid-credentials-error";

@Catch(InvalidCredentialError)
export class InvalidCredentialsErrorFilter implements ExceptionFilter {
	catch(exception: InvalidCredentialError, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<FastifyReply>();

		response.status(422).send({
			statusCode: 422,
			error: 'Invalid Credentials Error',
			message: exception.message,
		});
	}
}