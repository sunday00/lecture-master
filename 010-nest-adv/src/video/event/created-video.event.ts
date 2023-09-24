import { IEvent } from '@nestjs/cqrs';

export class CreatedVideoEvent implements IEvent {
  constructor(readonly id: string) {}
}
