import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LeadValidator {
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
        email: schema.string({trim: true}, [
            rules.required(),
            rules.email(),
            rules.minLength(5)
        ]),
        subject: schema.string({trim: true}, [
            rules.required(),
            rules.minLength(5)
        ]),
        desc: schema.string({trim: true}, [
            rules.required(),
            rules.minLength(15),
            rules.maxLength(255)
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
        'subject.minLength': '{{ field }} minimal mengandung 5 huruf',
        'desc.minLength': 'Mohon jelaskan secara rinci pesanmu. Minimal mengandung 15 huruf',
        required: '{{ field }} wajib diisi',
        email: '{{ field }} harus berupa email asli'
    }
}
