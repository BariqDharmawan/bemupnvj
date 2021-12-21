"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Aspiration_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Aspiration"));
const AspirationCategory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AspirationCategory"));
const AspirationValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/AspirationValidator"));
class AspirationsController {
    async manage({ view }) {
        const titlePage = 'Aspirasi Dari Mahasiswa';
        const aspirationCategory = await AspirationCategory_1.default.query().preload('aspirations');
        return view.render('aspiration/manage', { titlePage, aspirationCategory });
    }
    async index({}) {
    }
    async create({}) {
    }
    async store({ response, request }) {
        const validateAspirations = await request.validate(AspirationValidator_1.default);
        const sendAspiration = await Aspiration_1.default.create({
            name: validateAspirations.name + ' - ' + validateAspirations.major,
            email: validateAspirations.email,
            aspiration_category_id: validateAspirations.aspiration_category_id,
            message: validateAspirations.message
        });
        return response.json({
            'success': true,
            'message': 'Berhasil mengirim aspirasi!',
            'data': sendAspiration
        });
    }
    async show({}) {
    }
    async edit({}) {
    }
    async update({}) {
    }
    async destroy({}) {
    }
}
exports.default = AspirationsController;
//# sourceMappingURL=AspirationsController.js.map