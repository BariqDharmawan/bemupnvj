"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UpdateContactValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            logo: Validator_1.schema.file.optional({
                size: '2mb',
                extnames: ['jpg', 'gif', 'png', 'webp', 'jpeg']
            }),
            info: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.minLength(10)
            ]),
            additional_info: Validator_1.schema.string.optional({ trim: true }),
        });
        this.messages = {
            required: '{{ field }} belum diisi',
            'info.minLength': '{{ field }} minimal memiliki 10 karakter',
            'additional_info.minLength': '{{ field }} minimal memiliki 3 karakter'
        };
    }
}
exports.default = UpdateContactValidator;
//# sourceMappingURL=UpdateContactValidator.js.map