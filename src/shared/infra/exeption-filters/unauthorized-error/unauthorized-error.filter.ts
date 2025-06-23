import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { FastifyReply } from "fastify";
import { UnauthorizedError } from "src/shared/application/errors/unauthorized-error";

@Catch(UnauthorizedError)
export class UnauthorizedErrorFilter implements ExceptionFilter {
	catch(exception: UnauthorizedError, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<FastifyReply>();

		response.status(404).send({
			statusCode: 404,
			error: 'Not Found Error',
			message: exception.message,
		});
	}
}