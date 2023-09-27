import { Injectable, Logger } from '@nestjs/common';
import { VideoService } from '../video/video.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EmailService } from '../email/email.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly videoService: VideoService, private readonly emailService: EmailService) {}

  @Cron(CronExpression.EVERY_6_MONTHS)
  async handleEmailCron() {
    Logger.log('email task called');
    const videos = await this.videoService.findTopDownload(5);
    await this.emailService.send(videos);
  }
}
