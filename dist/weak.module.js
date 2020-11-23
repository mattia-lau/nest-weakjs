"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeakModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeakModule = void 0;
const common_1 = require("@nestjs/common");
const weak_constants_1 = require("./weak.constants");
const weak_service_1 = require("./weak.service");
let WeakModule = WeakModule_1 = class WeakModule {
    static forRoot(options) {
        return {
            module: WeakModule_1,
            providers: [
                {
                    provide: weak_constants_1.WEAK_MODULE_OPTIONS,
                    useValue: options,
                },
                {
                    provide: weak_constants_1.WEAK_MODULE_NEST_PROVIDER,
                    useClass: weak_service_1.WeakLoggerService,
                },
            ],
            exports: [weak_service_1.WeakLoggerService],
        };
    }
    static forRootAsync(options) {
        return {
            module: WeakModule_1,
            imports: options.imports || [],
            providers: this.createAsyncProvider(options),
        };
    }
    static createAsyncProvider(options) {
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
    static createAsyncOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: weak_constants_1.WEAK_MODULE_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: weak_constants_1.WEAK_MODULE_OPTIONS,
            useFactory: async (optionsFactory) => await optionsFactory.createTelegramOptions(),
            inject: [options.useExisting || options.useClass],
        };
    }
};
WeakModule = WeakModule_1 = __decorate([
    common_1.Module({
        providers: [weak_service_1.WeakLoggerService],
        exports: [weak_service_1.WeakLoggerService],
    }),
    common_1.Global()
], WeakModule);
exports.WeakModule = WeakModule;
//# sourceMappingURL=weak.module.js.map