import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService, TypeOrmHealthIndicator } from '@nestjs/terminus';
import { Public } from '../common/decorator/public.decorator';

@Controller('health')
export class HealthController {
  constructor(private readonly health: HealthCheckService, private db: TypeOrmHealthIndicator) {}

  @Get()
  @HealthCheck()
  @Public()
  check() {
    return this.health.check([() => this.db.pingCheck('hello db')]);
  }
}
