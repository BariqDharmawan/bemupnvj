import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AspirationValidator {
    constructor(protected ctx: HttpContextContract) {
    }

    /*
     * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
     *
     * For example:
     * 1. The username must be of data type string. But then also, it should
     *    not contain special characters or numbers.
     *    ```
     *     schema.string({}, [ rules.alpha() ])
     *    ```
     *
     * 2. The email must be of data type string, formatted as a valid
     *    email. But also, not used by any other user.
     *    ```
     *     schema.string({}, [
     *       rules.email(),
     *       rules.unique({ table: 'users', column: 'email' }),
     *     ])
     *    ```
     */
    public schema = schema.create({
        name: schema.string({trim: true}, [
            rules.alpha({
                allow: ['space']
            }),
            rules.required(),
            rules.minLength(3),
            rules.maxLength(200),
        ]),
        major: schema.string({trim: true}, [
            rules.required(),
            rules.exists({table: 'majors', column: 'name'})
        ]),
        email: schema.string({trim: true}, [
            rules.required(),
            rules.email()
        ]),
        message: schema.string({trim: true}, [
            rules.required(),
            rules.minLength(10),
            rules.maxLength(200)
        ]),
        aspiration_category_id: schema.number([
            rules.required(),
            rules.exists({table: 'aspiration_categories', column: 'id'})
        ])
    })

    /**
     * Custom messages for validation failures. You can make use of dot notation `(.)`
     * for targeting nested fields and array expressions `(*)` for targeting all
     * children of an array. For example:
     *
     * {
     *   'profile.username.required': 'Username is required',
     *   'scores.*.number': 'Define scores as valid numbers'
     * }
     *
     */
    public messages = {
        'major.exists': "Jurusan yang dipilih invalid, pasti diubah diinspect kan",
        'name.alpha': "Yakin ini nama kamu? Masa sih nama mu ada angka atau spesial karakternya (titik, koma, garis miring, dll)",
        required: "{{ field }} jangan sampai kosong yaa, nanti dia kecewa",
        email: "Email nya isi yang valid kak, biar kita bisa kontak kamu suatu saat nanti",
        'message.minLength': "Isi {{ field }} minimal 10 huruf yaa kak",
        'aspiration_category_id.exists': "Kategori invalid, jangan coba coba inspect deh"
    }
}
