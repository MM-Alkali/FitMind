"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppointment = void 0;
const appointmentModel_1 = require("../models/appointmentModel");
const uuid_1 = require("uuid");
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, uuid_1.v4)();
        const { email, fullName, serviceType, sessionType, sessionDate, sessionFrequency, additionalInfo, } = req.body;
        /*========================Validation========================*/
        const verifiedUser = req.user;
        // const validation = AppointmentSchema.validate(req.body, options);
        // if (validation.error) {
        //   res.render("AppointmentBookingPage", {
        //     error: validation.error.details[0].message,
        //   });
        // }
        /*===================Creating appointment===================*/
        const appointment = yield appointmentModel_1.AppointmentInstance.create({
            id,
            email,
            fullName,
            serviceType,
            sessionType,
            sessionDate,
            sessionFrequency,
            additionalInfo,
            // userId: verifiedUser.id
        });
        return res.redirect("/userdashboard");
        // return res.status(201).json({
        //   msg: "Appointment created successfully",
        //   appointment,
        // });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});
exports.createAppointment = createAppointment;
//# sourceMappingURL=appointmentController.js.map