import { BadRequestException } from '@nestjs/common';

export function handleError(error: Error) {
  throw new BadRequestException(error);
  return undefined;
}
