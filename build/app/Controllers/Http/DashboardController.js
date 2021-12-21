"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
class DashboardController {
    async index({ view, request }) {
        const appName = Env_1.default.get('APP_NAME');
        const titlePage = 'Dashboard';
        let paths = request.url().split('/');
        paths = Object.assign({}, paths);
        return view.render('dashboard', { appName, paths, titlePage });
    }
}
exports.default = DashboardController;
//# sourceMappingURL=DashboardController.js.map