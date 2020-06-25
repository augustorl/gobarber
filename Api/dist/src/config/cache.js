"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    driver: 'redis',
    config: {
        redis: {
            port: process.env.REDIS_PORT,
            host: process.env.REDIS_HOST,
            password: process.env.REDIS_PASS || undefined,
        },
    },
};
