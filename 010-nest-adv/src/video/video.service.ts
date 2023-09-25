import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Video } from './entity/video.entity';
import * as path from 'path';
import * as fs from 'node:fs/promises';
import { createReadStream, ReadStream } from 'node:fs';

@Injectable()
export class VideoService {
  constructor(@InjectRepository(Video) private videoRepository: Repository<Video>) {}

  async findOne(id: string) {
    const video = await this.videoRepository.findOne({ relations: ['user'], where: { id } });
    if (!video) throw new NotFoundException('No video');
    return video;
  }

  async download(id: string): Promise<{ stream: ReadStream; mimetype: string; size: number }> {
    const video = await this.videoRepository.findOne({ where: { id } });
    if (!video) throw new NotFoundException('No video');

    await this.videoRepository.update({ id }, { downloadCnt: () => 'download_cnt + 1' });

    const { mimetype } = video;
    const ext = mimetype.split('/')[1];
    const filePath = path.join(process.cwd(), 'video-storage', `${id}.${ext}`);
    const { size } = await fs.stat(filePath);
    const stream = createReadStream(filePath);
    return { stream, mimetype, size };
  }
}
