"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Guest {
    async handle({ auth, response }, next) {
        if (auth.use('web').isLoggedOut) {
            await next();
        }
        else {
            return response.redirect().toRoute('landing_page');
        }
    }
}
exports.default = Guest;
//# sourceMappingURL=Guest.js.map