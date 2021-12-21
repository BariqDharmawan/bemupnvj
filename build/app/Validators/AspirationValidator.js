"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class AspirationValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.alpha({
                    allow: ['space']
                }),
                Validator_1.rules.required(),
                Validator_1.rules.minLength(3),
                Validator_1.rules.maxLength(200),
            ]),
            major: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.exists({ table: 'majors', column: 'name' })
            ]),
            email: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.email()
            ]),
            message: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.required(),
                Validator_1.rules.minLength(10),
                Validator_1.rules.maxLength(200)
            ]),
            aspiration_category_id: Validator_1.schema.number([
                Validator_1.rules.required(),
                Validator_1.rules.exists({ table: 'aspiration_categories', column: 'id' })
            ])
        });
        this.messages = {
            'major.exists': "Jurusan yang dipilih invalid, pasti diubah diinspect kan",
            'name.alpha': "Yakin ini nama kamu? Masa sih nama mu ada angka atau spesial karakternya (titik, koma, garis miring, dll)",
            required: "{{ field }} jangan sampai kosong yaa, nanti dia kecewa",
            email: "Email nya isi yang valid kak, biar kita bisa kontak kamu suatu saat nanti",
            'message.minLength': "Isi {{ field }} minimal 10 huruf yaa kak",
            'aspiration_category_id.exists': "Kategori invalid, jangan coba coba inspect deh"
        };
    }
}
exports.default = AspirationValidator;
//# sourceMappingURL=AspirationValidator.js.map