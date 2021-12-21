"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AspirationCategory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/AspirationCategory"));
const StoreAspirationCategoryValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/StoreAspirationCategoryValidator"));
class AspirationCategoriesController {
    async store({ response, session, request }) {
        const categoryValidate = await request.validate(StoreAspirationCategoryValidator_1.default);
        AspirationCategory_1.default.create({
            category: categoryValidate.category
        });
        session.flash('notification', 'Berhasil membuat kategori aspirasi');
        return response.redirect().back();
    }
    async update({ params, request, session, response }) {
        const categoryValidate = await request.validate(StoreAspirationCategoryValidator_1.default);
        const updateCategory = await AspirationCategory_1.default.findOrFail(params.id);
        updateCategory.category = categoryValidate.category;
        await updateCategory.save();
        session.flash('notification', 'Berhasil mengubah kategori aspirasi');
        return response.redirect().back();
    }
    async destroy({}) {
    }
}
exports.default = AspirationCategoriesController;
//# sourceMappingURL=AspirationCategoriesController.js.map