"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class StoreLogoMeaningValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            title: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.minLength(4),
                Validator_1.rules.alpha({ allow: ['dash', 'space'] })
            ]),
            desc: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.minLength(7)
            ]),
            img: Validator_1.schema.file({
                extnames: ['jpg', 'png', 'gif', 'webp', 'jpeg'],
                size: '2mb',
            })
        });
        this.messages = {
            'minLength': 'Kolom {{ field }} harus memiliki minimal {{ options.minLength }} karakter'
        };
    }
}
exports.default = StoreLogoMeaningValidator;
//# sourceMappingURL=StoreLogoMeaningValidator.js.map