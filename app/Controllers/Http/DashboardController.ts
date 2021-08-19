import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Env from '@ioc:Adonis/Core/Env'

export default class DashboardController {
    public async index({view, request}: HttpContextContract) {
        const appName: string = Env.get('APP_NAME');
        const titlePage = 'Dashboard'

        let paths: any = request.url().split('/')
        paths = Object.assign({}, paths)

        return view.render('dashboard', {appName, paths, titlePage})
    }
}
