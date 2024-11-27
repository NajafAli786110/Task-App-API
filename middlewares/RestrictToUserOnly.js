import { getUsers } from "../services/Auth.js";

function restrictToLoggedInUserOnly(req, res, next) {
  const userCheck = req.cookies?.userValidate;

  if (!userCheck) {
    return res.status(401).json({
      status: false,
      message: "Unauthorized access attempt. Please log in.",
    });
  }

  const currentUser = getUsers(userCheck);
  req.currUser = currentUser

  next();
}

export { restrictToLoggedInUserOnly };
