import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Analytics } from './entity/analytics.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectRepository(Analytics)
    private readonly analyticsRepository: Repository<Analytics>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async updateVideoDownloadCnt(id: string) {
    const stat = await this.analyticsRepository.findOneBy({ videoId: id });
    if (!stat) {
      await this.analyticsRepository.save(
        this.analyticsRepository.create({ videoId: id, downloadCnt: 1 }),
      );

      return;
    }

    await this.analyticsRepository.update(
      { id: stat.id },
      { downloadCnt: () => 'download_cnt + 1' },
    );
  }
}
