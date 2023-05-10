"use strict";
// import express, { Request, Response, NextFunction } from 'express';
// import bcrypt from 'bcrypt';
// import { loginUserSchema, options } from '../utils/util';
// import { UserInstance } from '../models/userModel';
// const loginUser = async (req: Request, res: Response) => {
//     try {
//       const {  email, password } = req.body;
//       const resultValidation = loginUserSchema.validate(req.body, options)
//       if(resultValidation.error){
//         return res.render("Login", {error:resultValidation.error.details[0].message})
//       }
//       //Generate Token
//       const User = await UserInstance.findOne({
//         where: {email}
//       })  as unknown as {[key: string]:string};
//       const loginValidation = await bcrypt.compare(password, User.password)
//       if(loginValidation){
//         return res.status(200).json({data: User, success: true})
//       }
//       res.status(400).json({error:"Invalid email/password"});
//     } catch (error) {
//       console.error(error);
//       return res.json({status: 500, Error: "Internal server error", success:false })
//     };
//   }
//   export default loginUser
//# sourceMappingURL=logincontroller.js.map