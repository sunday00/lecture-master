import { Injectable } from '@nestjs/common';

@Injectable()
export class Result {
  static readonly SUCCESS = new Result('success', 'done');
  static FAIL = (msg = 'something is wrong') => new Result('fail', msg);

  private constructor(
    private readonly result: string,
    private message: string,
  ) {}
}
