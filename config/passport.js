// import {
//   Strategy as LocalStrategy,
//   AuthenticatorDoneFunction,
// } from "passport-local";
// import passport, { PassportStatic } from "passport";
// import { User, IUser, comparePassword } from "../models/User";
// //configuring passport authentication middleware, making use of local strategy
// export const configurePassport = (passport: PassportStatic) => {
//   passport.use(
//     new LocalStrategy(
//       { usernameField: "email" },
//       async (
//         email: string,
//         password: string,
//         done: AuthenticatorDoneFunction
//       ) => {
//         try {
//           //check if the email exists in the db
//           const user = await User.findOne({ email: email.toLowerCase() });
//           if (!user) {
//             return done(null, false, { msg: `Email ${email} not found.` });
//           }
//           if (!user.password) {
//             return done(null, false, {
//               msg: "Incorrect Password",
//             });
//           }
//           //if there is a match then compare the password to the password in the db
//           const isMatch = await comparePassword(password, user.password);
//           if (isMatch) {
//             return done(null, user);
//           }
//           return done(null, false, { msg: "Invalid email or password." });
//         } catch (err) {
//           return done(err);
//         }
//       }
//     )
//   );
//   passport.serializeUser((user: IUser, done: AuthenticatorDoneFunction) => {
//     done(null, user._id);
//   });
//   passport.deserializeUser((id: string, done: AuthenticatorDoneFunction) => {
//     User.findById(id)
//       .then((user) => done(null, user))
//       .catch((err) => done(err));
//   });
// };
//# sourceMappingURL=passport.js.map