import { DynamicModule } from '@nestjs/common';
import { WeakConfig } from 'weakjs';
import { WeakAsyncOptions } from './weak.interfaces';
export declare class WeakModule {
    static forRoot(options?: WeakConfig): DynamicModule;
    static forRootAsync(options: WeakAsyncOptions): DynamicModule;
    private static createAsyncProvider;
    private static createAsyncOptionsProvider;
}
