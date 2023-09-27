import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindVideoQuery } from './find-video.query';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from '../entity/video.entity';
import { Repository } from 'typeorm';

@Injectable()
@QueryHandler(FindVideoQuery)
export class FindVideoHandler implements IQueryHandler<FindVideoQuery> {
  constructor(@InjectRepository(Video) private videoRepository: Repository<Video>) {}

  async execute(query: FindVideoQuery): Promise<any> {
    const { page, size } = query;

    return await this.videoRepository.find({ relations: ['user'], skip: (page - 1) * size, take: size });
  }
}
