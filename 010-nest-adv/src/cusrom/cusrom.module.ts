import { DynamicModule, Module } from '@nestjs/common';
import { CusromController } from './cusrom.controller';
import { CusromService } from './cusrom.service';
import { ConfigService } from '@nestjs/config';

@Module({})
export class CusromModule {
  static forRootAsync(param: {
    useFactory: (configService: ConfigService) => { a: string };
    inject: any[];
  }): DynamicModule {
    return {
      controllers: [CusromController],
      providers: [
        {
          provide: CusromService,
          useClass: CusromService,
        },
      ],
      module: CusromModule,
    };
  }
}
