"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class StoreSatasetValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            title: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.unique({ table: 'satasets', column: 'title' }),
                Validator_1.rules.maxLength(100)
            ]),
            short_desc: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.minLength(10)
            ]),
            file: Validator_1.schema.file({
                size: '50mb',
                extnames: ['pdf']
            }),
            is_display: Validator_1.schema.boolean.optional()
        });
        this.messages = {};
    }
}
exports.default = StoreSatasetValidator;
//# sourceMappingURL=StoreSatasetValidator.js.map