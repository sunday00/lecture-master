import { Injectable } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateVideoCommand } from './create-video.command';
import { DataSource } from 'typeorm';
import { Video } from '../entity/video.entity';
import { User } from '../../user/entity/user.entity';
import { CreatedVideoEvent } from '../event/created-video.event';

@Injectable()
@CommandHandler(CreateVideoCommand)
export class CreateVideoHandler implements ICommandHandler<CreateVideoCommand> {
  constructor(private dataSource: DataSource, private readonly eventBus: EventBus) {}

  async execute(command: CreateVideoCommand): Promise<Video> {
    const { userId, title, mimeType, ext, buffer } = command;
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();

    let err;

    try {
      const user = await queryRunner.manager.findOneBy(User, { id: userId });
      const video = await queryRunner.manager.save(
        queryRunner.manager.create(Video, { title, mimetype: mimeType, user }),
      );

      await this.uploadVideo(video.id, ext, buffer);

      await queryRunner.commitTransaction();

      this.eventBus.publish(new CreatedVideoEvent(video.id));

      return video;
    } catch (e) {
      await queryRunner.rollbackTransaction();

      err = e;
    } finally {
      await queryRunner.release();
      if (err) throw err;
    }
  }

  private async uploadVideo(id: string, ext: string, buffer: Buffer) {
    console.log('Video upload');
  }
}
