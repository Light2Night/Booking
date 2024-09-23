﻿using EasyStay.Application.Common.Exceptions;
using FluentValidation;
using System.Net;
using System.Text.Json;

namespace EasyStay.WebApi.Middleware;

public class CustomExceptionHandlerMiddleware(
	RequestDelegate next
) {

	public async Task Invoke(HttpContext context) {
		try {
			await next(context);
		}
		catch (Exception exception) {
			await HandleExceptionAsync(context, exception);
		}
	}

	private static Task HandleExceptionAsync(HttpContext context, Exception exception) {
		var code = HttpStatusCode.InternalServerError;
		var result = string.Empty;

		switch (exception) {
			case BadRequestException:
				code = HttpStatusCode.BadRequest;
				break;
			case ValidationException validationException:
				code = HttpStatusCode.BadRequest;
				result = JsonSerializer.Serialize(validationException.Errors);
				break;
			case NotFoundException:
				code = HttpStatusCode.NotFound;
				break;
			case UnauthorizedException:
				code = HttpStatusCode.Unauthorized;
				break;
		}
		context.Response.ContentType = "application/json";
		context.Response.StatusCode = (int)code;

		if (result == string.Empty) {
			result = JsonSerializer.Serialize(new { error = exception.Message });
		}

		return context.Response.WriteAsync(result);
	}
}