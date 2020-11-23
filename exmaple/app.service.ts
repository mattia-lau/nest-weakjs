import { Injectable } from '@nestjs/common';
import { WeakLoggerService } from 'nest-weakjs';

@Injectable()
export class AppService {
  constructor(private readonly weakLogger: WeakLoggerService) {
    this.weakLogger.log(
      { msg: 'HI', ary: ['asdfasdf', 'asdf'] },
      AppService.name,
    );
  }
}
