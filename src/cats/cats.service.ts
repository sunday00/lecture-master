import { Injectable } from '@nestjs/common';
import { Cat } from './cat.model';
import { SampleService } from '../sample/sample.service';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  constructor(private sampleService: SampleService) {}

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  hello(): string {
    return this.sampleService.hello();
  }
}
