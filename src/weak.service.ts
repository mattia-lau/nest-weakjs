import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { Logger, WeakConfig } from 'weakjs';
import { WEAK_MODULE_OPTIONS } from './weak.constants';

@Injectable()
export class WeakLoggerService implements LoggerService {
  private context?: string;
  private logger: Logger;

  public constructor(
    @Inject(WEAK_MODULE_OPTIONS)
    options?: WeakConfig,
  ) {
    this.logger = new Logger(options);
  }

  public setContext(context: string) {
    this.context = context;
  }

  public log(message: any, context?: string): any {
    context = context || this.context;
    return this.logger.info(message, context);
  }

  public error(message: any, context?: string): any {
    context = context || this.context;
    return this.logger.error(message, context);
  }

  public warn(message: any, context?: string): any {
    context = context || this.context;
    return this.logger.warn(message, context);
  }

  public debug(message: any, context?: string): any {
    context = context || this.context;
    return this.logger.debug(message, context);
  }

  public verbose(message: any, context?: string): any {
    context = context || this.context;
    return this.logger.verbose(message, context);
  }
}
