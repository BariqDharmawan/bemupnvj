import Factory from "@ioc:Adonis/Lucid/Factory"
import Aspiration from "App/Models/Aspiration"
import AspirationCategory from "App/Models/AspirationCategory"
import AspirationCategories from "Database/migrations/1629132135539_aspiration_categories"

export const AspirationsFactories = Factory.define(Aspiration, ({ faker }) => {
    return {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        email: faker.internet.email(),
        message: faker.lorem.paragraphs(3)
    }
}).build()

export const AspirationCategoriesFactories = Factory
    .define(AspirationCategory, ({ faker }) => {
        return {
            category: faker.lorem.words(2)
        }
    })
    .relation('aspirations', () => AspirationsFactories)
    .build()