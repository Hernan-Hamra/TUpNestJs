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
exports.MyJwtService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let MyJwtService = class MyJwtService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    generateToken(user) {
        const payload = {
            email: user.email,
            role: user.role,
            status: user.status,
        };
        return this.jwtService.sign(payload, {
            secret: process.env.JWT_SECRET_KEY,
        });
    }
    validateToken(token) {
        try {
            const decoded = this.jwtService.verify(token, {
                secret: process.env.JWT_SECRET_KEY,
            });
            return { success: true, data: decoded };
        }
        catch (error) {
            console.error('Token inválido:', error);
            return {
                success: false,
                message: 'Token inválido',
                error: error.message,
            };
        }
    }
};
exports.MyJwtService = MyJwtService;
exports.MyJwtService = MyJwtService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], MyJwtService);
//# sourceMappingURL=jwt.service.js.map