import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateContactValidator {
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
        embed_map: schema.string.optional({trim: true}, [
            rules.minLength(100)
        ]),
        address: schema.string.optional({trim: true}, [
            rules.minLength(10)
        ]),
        email: schema.string.optional({trim: true}, [
            rules.email({sanitize: true})
        ]),
        telephone: schema.string.optional({}, [
            rules.mobile({
                locales: ['id-ID']
            })
        ]),
        desc_contact_page: schema.string.optional({trim: true}, [
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
        'address.required': 'Alamat belum diisi',
        'embed_map.minLength': 'Mohon untuk memasukan embed maps yang valid'
    }
}
