"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
class OurSocial extends Orm_1.BaseModel {
    static generateUrl(platform, username) {
        let link = '';
        switch (platform) {
            case 'instagram':
                link = `https://www.instagram.com/${username}`;
                break;
            case 'youtube':
                link = `https://www.youtube.com/c/${username}`;
                break;
            case 'facebook':
                link = `https://www.facebook.com/${username}`;
                break;
            case 'twitter':
                link = `https://twitter.com/${username}`;
                break;
            case 'whatsapp':
                if (username.startsWith('0')) {
                    username = username.replace(username.charAt(0), "62");
                }
                else if (username.startsWith('62')) {
                    username = username;
                }
                else {
                    username = `62${username}`;
                }
                link = `https://wa.me/${username}`;
                break;
            case 'telegram':
                link = `https://telegram.me/${username}`;
                break;
        }
        return link;
    }
}
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], OurSocial.prototype, "id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], OurSocial.prototype, "logo", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], OurSocial.prototype, "name", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], OurSocial.prototype, "username", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], OurSocial.prototype, "color", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], OurSocial.prototype, "url", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], OurSocial.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], OurSocial.prototype, "updatedAt", void 0);
exports.default = OurSocial;
//# sourceMappingURL=OurSocial.js.map