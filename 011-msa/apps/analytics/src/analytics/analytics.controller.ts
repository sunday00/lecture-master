import { Controller, Get } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import {
  Ctx,
  EventPattern,
  KafkaContext,
  Payload,
} from '@nestjs/microservices';

@Controller()
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get()
  getHello(): string {
    return this.analyticsService.getHello();
  }

  @EventPattern('video_downloaded')
  async handleVideoDownloaded(
    @Payload() message: any,
    // @Ctx() context: KafkaContext,
  ) {
    console.info({ message });
    // console.log(`Topic: ${context.getTopic()}`);

    await this.analyticsService.updateVideoDownloadCnt(message.id);
  }
}
