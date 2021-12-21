"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    async index({ view }) {
        const titlePage = 'Login';
        return view.render('auth/login', { titlePage });
    }
    async store({ request, auth, response, session }) {
        const { email, password } = request.all();
        try {
            await auth.use('web').attempt(email, password, true);
            return response.redirect().toRoute('about_us.vision_mission');
        }
        catch (error) {
            session.flash('notification', error);
            console.log(error);
            return response.redirect().back();
        }
    }
    async logout({ auth, response }) {
        await auth.use('web').logout();
        return response.redirect().toPath('/login');
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map