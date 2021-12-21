"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.post('logout', 'AuthController.logout').as('admin.logout');
Route_1.default.group(() => {
    Route_1.default.get('/', 'AuthController.index').as('index');
    Route_1.default.post('post', 'AuthController.store').as('store');
}).prefix('login').as('admin.login');
//# sourceMappingURL=routeAuth.js.map