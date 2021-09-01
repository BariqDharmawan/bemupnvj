import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import View from '@ioc:Adonis/Core/View'

export default class AppProvider {
    constructor(protected app: ApplicationContract) {
    }

    public register() {
        // Register your own bindings
    }

    public async boot() {
        //
    }

    public async ready() {
        // App is ready
    }

    public async shutdown() {
        // Cleanup, since app is going down
    }
}
