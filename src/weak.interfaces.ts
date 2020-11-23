import { ModuleMetadata } from '@nestjs/common/interfaces';
import { Type } from '@nestjs/common';
import { WeakConfig } from 'weakjs';

export interface WeakOptionsFactory {
  createTelegramOptions(): Promise<WeakConfig> | WeakConfig;
}

export interface WeakAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (...args: any[]) => Promise<WeakConfig> | WeakConfig;
  inject?: any[];
  useExisting?: Type<WeakOptionsFactory>;
  useClass?: Type<WeakOptionsFactory>;
}
