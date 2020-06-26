"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'mailyouown@yourdomain.com',
      name: 'Owner Name'
    }
  }
};
exports.default = _default;