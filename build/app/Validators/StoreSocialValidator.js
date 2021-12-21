"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class StoreSocialValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            platform: Validator_1.schema.string({}, [
                Validator_1.rules.required(),
                Validator_1.rules.unique({
                    table: 'our_socials',
                    column: 'name',
                    caseInsensitive: false,
                })
            ]),
            username: Validator_1.schema.string({
                trim: true
            }, [
                Validator_1.rules.required(),
                Validator_1.rules.minLength(3),
                Validator_1.rules.maxLength(15)
            ]),
            color: Validator_1.schema.string({}, [
                Validator_1.rules.required()
            ]),
            logo: Validator_1.schema.file({
                size: '2mb',
                extnames: ['jpg', 'png', 'gif', 'webp', 'jpeg', 'ico', 'svg']
            })
        });
        this.messages = {
            'platform.unique': '{{ field }} already exist, please choose different {{ field }}',
            'username.regex': 'Username should only contain letter and alpha'
        };
        this.bail = true;
    }
}
exports.default = StoreSocialValidator;
//# sourceMappingURL=StoreSocialValidator.js.map