import View from '@ioc:Adonis/Core/View'

export default class Helper {
    public static getStringAfter(text: string, after: string) {
        return text.split(after).splice(1).join(after)
    }

    private static clone = (obj: object) => Object.assign({}, obj);
    

    public static getCurrentDatetime() {
        return new Date().toISOString()
    }
}