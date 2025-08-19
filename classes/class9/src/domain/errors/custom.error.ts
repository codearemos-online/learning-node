export class CustomError extends Error {
    constructor(public readonly message: string, public readonly statusCode: number) {
        super(message);
    }

    public static badRequest(message: string): CustomError {
        return new CustomError(message, 400);
    }

    public static notFound(message: string): CustomError {
        return new CustomError(message, 404);
    }

    public static internalServerError(message: string): CustomError {
        return new CustomError(message, 500);
    }

    public static unauthorized(message: string): CustomError {
        return new CustomError(message, 401);
    }

    public static forbidden(message: string): CustomError {
        return new CustomError(message, 403);
    }
    
    
}