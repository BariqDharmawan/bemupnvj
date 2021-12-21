"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BlogCategory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/BlogCategory"));
const UpdateBlogCategoryValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UpdateBlogCategoryValidator"));
class BlogCategoriesController {
    async index({}) {
    }
    async store({ request, response, session }) {
        const addNewCategory = new BlogCategory_1.default();
        addNewCategory.category = request.input('category');
        session.flash('notification', "Berhasil menambah kategori");
        await addNewCategory.save();
        return response.redirect().back();
    }
    async update({ params, request, response, session }) {
        const validateCategory = await request.validate(UpdateBlogCategoryValidator_1.default);
        const updateCategory = await BlogCategory_1.default.findOrFail(params.id);
        updateCategory.category = validateCategory.category;
        await updateCategory.save();
        session.flash('notification', "Berhasil mengubah kategori");
        return response.redirect().back();
    }
    async destroy({}) {
    }
}
exports.default = BlogCategoriesController;
//# sourceMappingURL=BlogCategoriesController.js.map