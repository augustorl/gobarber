"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var celebrate_1 = require("celebrate");
var upload_1 = __importDefault(require("@config/upload"));
var AppError_1 = __importDefault(require("@shared/errors/AppError"));
var routes_1 = __importDefault(require("./routes"));
require("@shared/infra/typeorm");
var rateLimiter_1 = __importDefault(require("./middlewares/rateLimiter"));
require("@shared/container");
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/files', express_1.default.static(upload_1.default.uploadsFolder));
app.use(rateLimiter_1.default);
app.use(routes_1.default);
app.use(celebrate_1.errors());
app.use(function (err, request, response, _) {
    if (err instanceof AppError_1.default) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    console.error(err);
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error.',
    });
});
app.listen(3333, function () {
    console.log('💈 Server just started on port:3333 💈');
});
