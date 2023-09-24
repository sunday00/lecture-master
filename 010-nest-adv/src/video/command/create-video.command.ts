import { ICommand } from '@nestjs/cqrs';

export class CreateVideoCommand implements ICommand {
  constructor(
    readonly userId: string,
    readonly title: string,
    readonly mimeType: string,
    readonly ext: string,
    readonly buffer: Buffer,
  ) {}
}
