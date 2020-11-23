"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeakLoggerService = void 0;
const common_1 = require("@nestjs/common");
const weakjs_1 = require("weakjs");
const weak_constants_1 = require("./weak.constants");
let WeakLoggerService = class WeakLoggerService {
    constructor(options) {
        this.logger = new weakjs_1.Logger(options);
    }
    setContext(context) {
        this.context = context;
    }
    log(message, context) {
        context = context || this.context;
        if ('object' === typeof message) {
            const { message: msg } = message, meta = __rest(message, ["message"]);
            return this.logger.info(msg, Object.assign({ context }, meta));
        }
        return this.logger.info(message, { context });
    }
    error(message, trace, context) {
        context = context || this.context;
        if (message instanceof Error) {
            const { message: msg, name, stack } = message, meta = __rest(message, ["message", "name", "stack"]);
            return this.logger.error(msg, Object.assign({ context, stack: [trace || message.stack] }, meta));
        }
        if ('object' === typeof message) {
            const { message: msg } = message, meta = __rest(message, ["message"]);
            return this.logger.error(msg, Object.assign({ context, stack: [trace] }, meta));
        }
        return this.logger.error(message, { context, stack: [trace] });
    }
    warn(message, context) {
        context = context || this.context;
        if ('object' === typeof message) {
            const { message: msg } = message, meta = __rest(message, ["message"]);
            return this.logger.warn(msg, Object.assign({ context }, meta));
        }
        return this.logger.warn(message, { context });
    }
    debug(message, context) {
        context = context || this.context;
        if ('object' === typeof message) {
            const { message: msg } = message, meta = __rest(message, ["message"]);
            return this.logger.debug(msg, Object.assign({ context }, meta));
        }
        return this.logger.debug(message, { context });
    }
    verbose(message, context) {
        context = context || this.context;
        if ('object' === typeof message) {
            const { message: msg } = message, meta = __rest(message, ["message"]);
            return this.logger.verbose(msg, Object.assign({ context }, meta));
        }
        return this.logger.verbose(message, { context });
    }
};
WeakLoggerService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(weak_constants_1.WEAK_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], WeakLoggerService);
exports.WeakLoggerService = WeakLoggerService;
//# sourceMappingURL=weak.service.js.map