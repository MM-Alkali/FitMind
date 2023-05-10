"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalInstance = void 0;
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../database/db.config"));
class ProfessionalInstance extends sequelize_1.Model {
}
exports.ProfessionalInstance = ProfessionalInstance;
ProfessionalInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    CV: { type: sequelize_1.DataTypes.BLOB, allowNull: true },
    availability: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    rate: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    phoneNumber: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    linkedin: { type: sequelize_1.DataTypes.STRING, allowNull: false },
}, {
    sequelize: db_config_1.default,
    tableName: "professional",
});
//# sourceMappingURL=professionalModel.js.map