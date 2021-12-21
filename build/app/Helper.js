"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helper {
    static getStringAfter(text, after) {
        return text.split(after).splice(1).join(after);
    }
    static getCurrentDatetime() {
        return new Date().toISOString();
    }
}
exports.default = Helper;
Helper.clone = (obj) => Object.assign({}, obj);
//# sourceMappingURL=Helper.js.map