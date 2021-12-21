"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OurMission_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/OurMission"));
class OurMissionsController {
    async getMission({}) {
        const missions = await OurMission_1.default.query().orderBy('order_number', 'asc');
        return missions;
    }
    async store({ request, response }) {
        const latestOrderNumber = await OurMission_1.default.query().select('order_number')
            .orderBy('order_number', 'desc').first();
        OurMission_1.default.create({
            content: request.input('content'),
            order_number: (latestOrderNumber?.order_number || 0) + 1
        });
        return response.redirect().back();
    }
    async show({}) {
    }
    async edit({}) {
    }
    async update({ request, params, response }) {
        const missionToEdit = await OurMission_1.default.findOrFail(params.id);
        missionToEdit.content = request.input('content');
        let isDirty = true, message = 'Successfully update mission content';
        if (missionToEdit.$isDirty) {
            await missionToEdit.save();
        }
        else {
            isDirty = false;
            message = 'Nothing gonna edit';
        }
        return response.json({
            'success': true,
            'message': message,
            'isDirty': isDirty
        });
    }
    async updateAllList({ request, response }) {
        const listUpdatedId = Array.from(request.body().updated_list_Id).map(id => {
            return Number(id);
        });
        for (let i = 0; i < listUpdatedId.length; i++) {
            const eachMission = await OurMission_1.default.findOrFail(listUpdatedId[i]);
            eachMission.order_number = i + 1;
            await eachMission.save();
            console.log(eachMission.order_number);
        }
        return response.json({
            'success': true,
            'message': 'Successfully update ordering missions'
        });
    }
    async destroy({ params, response }) {
        const getMission = await OurMission_1.default.findOrFail(params.id);
        await getMission.delete();
        return response.json({
            'success': true,
            'message': 'Successfully delete mission'
        });
    }
}
exports.default = OurMissionsController;
//# sourceMappingURL=OurMissionsController.js.map