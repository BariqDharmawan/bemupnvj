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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const BlogCategory_1 = __importDefault(require("./BlogCategory"));
class Blog extends Orm_1.BaseModel {
}
Blog.pathCover = '/uploads/article';
Blog.showAtPage = ['home', 'info-mahasiswa', 'portal-berita', 'events'];
__decorate([
    Orm_1.column({ isPrimary: true }),
    __metadata("design:type", Number)
], Blog.prototype, "id", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Blog.prototype, "title", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Blog.prototype, "slug", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Blog.prototype, "cover", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Blog.prototype, "content", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", String)
], Blog.prototype, "show_at_page", void 0);
__decorate([
    Orm_1.column.dateTime(),
    __metadata("design:type", luxon_1.DateTime)
], Blog.prototype, "show_until", void 0);
__decorate([
    Orm_1.column(),
    __metadata("design:type", Number)
], Blog.prototype, "blog_category_id", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Blog.prototype, "created_at", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Blog.prototype, "updated_at", void 0);
__decorate([
    Orm_1.belongsTo(() => BlogCategory_1.default, {
        foreignKey: 'blog_category_id'
    }),
    __metadata("design:type", Object)
], Blog.prototype, "blogCategory", void 0);
exports.default = Blog;
//# sourceMappingURL=Blog.js.map