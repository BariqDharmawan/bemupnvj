import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreSocialValidator {
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
        platform: schema.string({}, [
            rules.required(),
            rules.unique({
                table: 'our_socials', 
                column: 'name', 
                caseInsensitive: false
            })
        ]),
        username: schema.string({
            trim: true
        }, [
            rules.required(),
            rules.minLength(3),
            rules.maxLength(15),
            rules.alpha({allow: ['dash', 'underscore']})
        ]),
        logo: schema.file({
            size: '2mb',
            extnames: ['jpg', 'jpeg', 'png', 'webp', 'gif']
        }, [
            rules.required()
        ]),
        color: schema.string({}, [
            rules.required(),
            rules.regex(/^#.*$/)
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
        'username.regex': 'Username should only contain letter and alpha'
    }
}
