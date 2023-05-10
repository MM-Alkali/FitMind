"use strict";
// import express, { Request, Response } from "express";
// import { UserInstance } from "../models/userModel";
// import { AppointmentInstance } from "../models/appointmentModel";
// import { ProfessionalInstance } from "../models/professionalModel";
// // import { authorization } from './middlewares/authorization';
// // Get all users
// export const GetAllUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await UserInstance.findAll();
//     res.status(200).json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
// // Get all professionals
// export const GetAllProfessionals = async (req: Request, res: Response) => {
//   try {
//     const professionals = await ProfessionalInstance.findAll();
//     res.status(200).json(professionals);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
// // Get all appointments
// export const GetAllAppointments = async (req: Request, res: Response) => {
//   try {
//     const appointments = await AppointmentInstance.findAll();
//     res.status(200).json(appointments);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
// // Create a professional (with verification)
// // export const CreateProfessional = verifyProfessional, async (req: Request, res: Response) => {
// //   try {
// //     const professional = await ProfessionalInstance.create(req.body);
// //     res.status(201).json(professional);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: 'Internal server error' });
// //   }
// // };
// // Delete a user
// export const DeleteUser = async (req: Request, res: Response) => {
//   try {
//     const userId = req.params.id;
//     const deleted = await UserInstance.destroy({ where: { id: userId } });
//     if (deleted) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
// // Delete a professional
// export const DeleteProfessional = async (req: Request, res: Response) => {
//   try {
//     const professionalId = req.params.id;
//     const deleted = await ProfessionalInstance.destroy({
//       where: { id: professionalId },
//     });
//     if (deleted) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ message: "Professional not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
// // Delete an appointment
// export const DeleteAppointment = async (req: Request, res: Response) => {
//   try {
//     const appointmentId = req.params.id;
//     const deleted = await AppointmentInstance.destroy({
//       where: { id: appointmentId },
//     });
//     if (deleted) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ message: "Appointment not found" });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
//# sourceMappingURL=adminController.js.map