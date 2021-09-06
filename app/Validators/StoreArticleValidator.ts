import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Blog from 'App/Models/Blog'

export default class StoreArticleValidator {
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
        title: schema.string({trim: true}, [
            rules.required(),
            rules.unique({table: 'blogs', column: 'title'}),
            rules.minLength(9),
            rules.maxLength(100)
        ]),
        cover: schema.file({
            size: '2mb',
            extnames: ['jpg', 'png', 'gif', 'webp', 'jpeg', 'ico', 'svg']
        }),
        content: schema.string({trim: true}, [
            rules.required(),
            rules.minLength(15)
        ]),
        show_at_page: schema.enum(Blog.showAtPage, [
            rules.required()
        ]),
        blog_category_id: schema.number([
            rules.exists({table: 'blog_categories', column: 'id'})
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
    public messages = {}
}
