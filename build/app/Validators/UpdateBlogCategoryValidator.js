"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UpdateBlogCategoryValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            category: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.maxLength(100),
                Validator_1.rules.minLength(2)
            ])
        });
        this.messages = {
            'category.minLength': "{{ field }} minimal memiliki 3 huruf",
            'category.maxLength': "{{ field }} tidak boleh lebih dari 10 huruf"
        };
    }
}
exports.default = UpdateBlogCategoryValidator;
//# sourceMappingURL=UpdateBlogCategoryValidator.js.map