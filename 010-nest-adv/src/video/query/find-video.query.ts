import { IQuery } from '@nestjs/cqrs';

export class FindVideoQuery implements IQuery {
  constructor(readonly page: number, readonly size: number) {}
}
