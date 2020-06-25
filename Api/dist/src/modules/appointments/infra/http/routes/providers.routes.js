"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ensureAuthenticated_1 = __importDefault(require("@modules/users/infra/http/middlewares/ensureAuthenticated"));
var celebrate_1 = require("celebrate");
var ProvidersController_1 = __importDefault(require("../controllers/ProvidersController"));
var ProviderMonthAvailabilityController_1 = __importDefault(require("../controllers/ProviderMonthAvailabilityController"));
var ProviderDayAvailabilityController_1 = __importDefault(require("../controllers/ProviderDayAvailabilityController"));
var providersRouter = express_1.Router();
var providersController = new ProvidersController_1.default();
var providerMonthAvailabilityController = new ProviderMonthAvailabilityController_1.default();
var providerDayAvailabilityController = new ProviderDayAvailabilityController_1.default();
providersRouter.use(ensureAuthenticated_1.default);
providersRouter.get('/', providersController.index);
providersRouter.get('/:provider_id/month-availability', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.PARAMS] = {
        provider_id: celebrate_1.Joi.string().uuid().required(),
    },
    _a)), providerMonthAvailabilityController.index);
providersRouter.get('/:provider_id/day-availability', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.PARAMS] = {
        provider_id: celebrate_1.Joi.string().uuid().required(),
    },
    _b)), providerDayAvailabilityController.index);
exports.default = providersRouter;
