import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Env from '@ioc:Adonis/Core/Env'

export default class DashboardController {
    public async index({view, logger, request}:HttpContextContract) {
        const appName: string = Env.get('APP_NAME');
        const paths: string = request.url()

        return view.render('dashboard', {appName, paths})
    }
}
