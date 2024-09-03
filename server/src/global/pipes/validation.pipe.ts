import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { ValidationException } from '../exceptions/ValidationException';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const obj = plainToInstance(metadata.metatype, value);
    let errors;
    try {
      errors = await validate(obj);
    } catch (error) {
      return value;
    }

    if (errors.length) {
      const errorsRecord = [];

      for (const error of errors) {
        const errorEntries = Object.entries(error.constraints)[0] as [
          string,
          string,
        ];
        const validationType = errorEntries[0];
        const translationMetadata: Record<string, string | number> = {};

        if (validationType == 'minLength' || validationType == 'maxLength') {
          translationMetadata.length = parseInt(
            errorEntries[1].match(/\b\d+\b/)[0],
          );
        }

        errorsRecord.push({
          field: error.property,
          message: errorEntries[1],
        });
      }

      throw new ValidationException(errorsRecord);
    }

    return value;
  }
}
