import AppUsers from "../model/UserModel.js";
import bcryptjs from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { getUsers, setUsers } from "../services/Auth.js";

async function handleCreatedUser(req, res) {
  const { username, user_email, user_password } = req.body;

  if (!username || !user_email || !user_password)
    return res.status(400).json({ message: "Fill all the details Properly" });

  try {
    const hashedPassword = await bcryptjs.hash(user_password, 4);

    const newUser = await AppUsers.create({
      username: username,
      user_email: user_email,
      user_password: hashedPassword,
    });
    setUsers(session, newUser);
    res.status(200).json({ message: `User created Successfully ${newUser}` });
  } catch (error) {
    return res
      .status(400)
      .json({ message: `Error occurs when User Creating ${error}` });
  }
}

async function handleLoggedInUser(req, res) {
  const { user_email, user_password } = req.body;
  if (!user_email || !user_password)
    return res.status(400).json({ message: "Fill all the details Properly" });

  try {
    const LoggedInUser = await AppUsers.find({ user_email });
    if (LoggedInUser.length < 1) {
      return res
        .status(400)
        .json({ message: "Email or Password is incorrect!" });
    }

    const decryptPassword = await bcryptjs.compare(
      user_password,
      LoggedInUser[0].user_password
    );

    if (!decryptPassword) {
      return res.status(400).json({ message: "Password is incorrect!" });
    }
    const session = uuidv4();
    res.cookie("userValidate", session, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    return res.status(200).json({ message: "User logged In Successfully" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: `Error occurs when User Login ${error}` });
  }
}

export { handleCreatedUser, handleLoggedInUser };
