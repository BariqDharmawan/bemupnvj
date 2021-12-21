"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class StoreAspirationCategoryValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            category: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.unique({ table: 'aspiration_categories', column: 'category' }),
                Validator_1.rules.required(),
                Validator_1.rules.minLength(3),
                Validator_1.rules.maxLength(10)
            ])
        });
        this.messages = {
            minLength: '{{ field }} harus mengandung minimal 3 huruf',
            maxLength: '{{ field }} tidak boleh lebih dari 10 huruf'
        };
    }
}
exports.default = StoreAspirationCategoryValidator;
//# sourceMappingURL=StoreAspirationCategoryValidator.js.map