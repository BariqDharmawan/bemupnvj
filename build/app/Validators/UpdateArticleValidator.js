"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const Blog_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Blog"));
class UpdateArticleValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            title: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.minLength(9),
                Validator_1.rules.maxLength(100)
            ]),
            cover: Validator_1.schema.file.optional({
                size: '2mb',
                extnames: ['jpg', 'png', 'gif', 'webp', 'jpeg', 'ico', 'svg']
            }),
            content: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.minLength(15)
            ]),
            show_at_page: Validator_1.schema.enum(Blog_1.default.showAtPage, [
                Validator_1.rules.required()
            ]),
            blog_category_id: Validator_1.schema.number([
                Validator_1.rules.exists({ table: 'blog_categories', column: 'id' })
            ])
        });
        this.messages = {};
    }
}
exports.default = UpdateArticleValidator;
//# sourceMappingURL=UpdateArticleValidator.js.map