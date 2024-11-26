function restrictToLoggedInUserOnly(req, res, next) {
  console.log("All Cookies:", req.cookies);
  const userCheck = req.cookies?.userValidate;

  if (!userCheck) {
    console.log("Unauthorized access attempt.");
  }

  console.log("Valid session:", userCheck);
  next();
}

export { restrictToLoggedInUserOnly };
