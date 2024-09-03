import { HttpException } from '@nestjs/common';

export class ValidationException extends HttpException {
  constructor(fields: Array<{ field: string; message: string }>) {
    const response = {
      fields,
      error: 'Bad Request',
      message: 'Bad Request',
      statusCode: 410,
    };
    super(response, 410);
  }
}
