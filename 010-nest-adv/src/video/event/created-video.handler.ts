import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CreatedVideoEvent } from './created-video.event';
import { Injectable } from '@nestjs/common';

@Injectable()
@EventsHandler(CreatedVideoEvent)
export class CreatedVideoHandler implements IEventHandler<CreatedVideoEvent> {
  handle(event: CreatedVideoEvent) {
    console.log(`Video created : ${event.id}`);
  }
}
