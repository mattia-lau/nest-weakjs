import {
  DynamicModule,
  Global,
  LoggerService,
  Module,
  Provider,
} from '@nestjs/common';
import { WeakConfig } from 'weakjs';
import {
  WEAK_MODULE_NEST_PROVIDER,
  WEAK_MODULE_OPTIONS,
} from './weak.constants';
import { WeakAsyncOptions, WeakOptionsFactory } from './weak.interfaces';

import { WeakLoggerService } from './weak.service';

@Module({
  providers: [WeakLoggerService],
  exports: [WeakLoggerService],
})
@Global()
export class WeakModule {
  public static forRoot(options?: WeakConfig): DynamicModule {
    return {
      module: WeakModule,
      providers: [
        {
          provide: WEAK_MODULE_OPTIONS,
          useValue: options,
        },
        {
          provide: WEAK_MODULE_NEST_PROVIDER,
          useClass: WeakLoggerService,
        },
      ],
      exports: [WeakLoggerService],
    };
  }

  public static forRootAsync(options: WeakAsyncOptions): DynamicModule {
    return {
      module: WeakModule,
      imports: options.imports || [],
      providers: this.createAsyncProvider(options),
    };
  }

  private static createAsyncProvider(options: WeakAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: WeakAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        provide: WEAK_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    return {
      provide: WEAK_MODULE_OPTIONS,
      useFactory: async (optionsFactory: WeakOptionsFactory) =>
        await optionsFactory.createTelegramOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }
}
