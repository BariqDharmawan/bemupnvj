"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const OurContact_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurContact"));
class OurContactSeeder extends Seeder_1.default {
    async run() {
        await OurContact_1.default.createMany([
            {
                logo: '/uploads/contact/envelope-solid.svg',
                info: 'upnvj@upnvj.ac.id',
                link: 'mailto:upnvj@upnvj.ac.id',
                additional_info: ''
            },
            {
                logo: '/uploads/contact/map-marked-solid.svg',
                info: 'Jl. RS. Fatmawati Raya, Pd. Labu, Kec. Cilandak, Kota Depok',
                link: 'https://maps.google.com/Jl. RS. Fatmawati Raya, Pd. Labu, Kec. Cilandak, Kota Depok',
                additional_info: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.339320100505!2d106.83199531476913!3d-6.218907195498191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d516c32bb7%3A0xd64d19ed8c9cebb2!2sHolywings%20Epicentrum!5e0!3m2!1sid!2sid!4v1630314071024!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
            },
            {
                logo: '/uploads/contact/phone-alt-solid.svg',
                info: '0217656971',
                link: 'tel:0217656971',
                additional_info: ''
            }
        ]);
    }
}
exports.default = OurContactSeeder;
//# sourceMappingURL=OurContactSeeder.js.map