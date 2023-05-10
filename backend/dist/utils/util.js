"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.AppointmentSchema = exports.loginUserSchema = exports.registrationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.registrationSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    dob: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    gender: joi_1.default.string().required(),
    country: joi_1.default.string().email().required(),
    city: joi_1.default.string().required(),
    interests: joi_1.default.string().required(),
    emergencyContact: joi_1.default.string()
        .pattern(/^[0-9]{11}$/)
        .required(),
    password: joi_1.default.string().min(5).max(16).required(),
    password2: joi_1.default.string().valid(joi_1.default.ref("password")).required(),
});
exports.loginUserSchema = joi_1.default.object().keys({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(4).max(20).required(),
});
exports.AppointmentSchema = joi_1.default.object().keys({
    email: joi_1.default.string().trim().lowercase().required(),
    fullName: joi_1.default.string().required(),
    sessionType: joi_1.default.string().required(),
    serviceType: joi_1.default.string().required(),
    sessionDate: joi_1.default.string().required(),
    sessionFrequency: joi_1.default.string().required(),
    additionalInfo: joi_1.default.string(),
});
exports.options = {
    abortEarly: false,
    errors: {
        wrap: {
            label: "",
        },
    },
};
//# sourceMappingURL=util.js.map