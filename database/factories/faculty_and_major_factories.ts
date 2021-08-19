import Factory from "@ioc:Adonis/Lucid/Factory"
import Faculty from "App/Models/Faculty"
import Major from "App/Models/Major"

export const MajorFactories = Factory.define(Major, ({ faker }) => {
    return {
        name: faker.lorem.words(2)
    }
}).build()

export const FacultyFactories = Factory.define(Faculty, ({ faker }) => {
    return {
        name: faker.lorem.words(3)
    }
})
.relation('majors', () => MajorFactories)
.build()