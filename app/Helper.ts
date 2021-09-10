import View from '@ioc:Adonis/Core/View'

export default class Helper {
    public static getStringAfter(text: string, after: string) {
        return text.split(after).splice(1).join(after)
    }

    private static clone = (obj: object) => Object.assign({}, obj);

    public static renameKey = (object, key, newKey) => {
        const clonedObj = Object.assign({}, object);
        const targetKey = clonedObj[key];
      
        delete clonedObj[key];
        clonedObj[newKey] = targetKey;
        return clonedObj;
    }

    public static groupBy(array, key) {
        // Return the end result
        return array.reduce((result, currentValue) => {
            // If an array already present for key, push it to the array. Else create an array and push the object
            (result[currentValue[key]] = result[currentValue[key]] || []).push(
                currentValue
            );
            // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
            return result;
        }, {}); // empty object is the initial value for result object
    }
}