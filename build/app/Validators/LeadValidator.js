"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class LeadValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            email: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.email(),
                Validator_1.rules.minLength(5)
            ]),
            subject: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.minLength(5)
            ]),
            desc: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.minLength(15),
                Validator_1.rules.maxLength(255)
            ])
        });
        this.messages = {
            'subject.minLength': '{{ field }} minimal mengandung 5 huruf',
            'desc.minLength': 'Mohon jelaskan secara rinci pesanmu. Minimal mengandung 15 huruf',
            required: '{{ field }} wajib diisi',
            email: '{{ field }} harus berupa email asli'
        };
    }
}
exports.default = LeadValidator;
//# sourceMappingURL=LeadValidator.js.map