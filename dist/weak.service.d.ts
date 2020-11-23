import { LoggerService } from '@nestjs/common';
import { WeakConfig } from 'weakjs';
export declare class WeakLoggerService implements LoggerService {
    private context?;
    private logger;
    constructor(options: WeakConfig);
    setContext(context: string): void;
    log(message: any, context?: string): any;
    error(message: any, trace?: string, context?: string): any;
    warn(message: any, context?: string): any;
    debug?(message: any, context?: string): any;
    verbose?(message: any, context?: string): any;
}
