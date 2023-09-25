import { Injectable, Logger } from '@nestjs/common';
import { VideoService } from '../video/video.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AnalyticsService {
  constructor(private readonly videoService: VideoService) {}

  @Cron(CronExpression.EVERY_MINUTE)
  async handleEmailCron() {
    Logger.log('email task called');
    const videos = await this.videoService.findTopDownload(5);
  }
}
