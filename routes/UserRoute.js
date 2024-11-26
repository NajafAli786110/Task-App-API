import express from 'express'
import { handleCreatedUser, handleLoggedInUser } from '../controllers/UserControllers.js';
const AppUserRoute = express.Router();

AppUserRoute.route("/login").post(handleLoggedInUser);
AppUserRoute.route("/signup").post(handleCreatedUser);

export default AppUserRoute