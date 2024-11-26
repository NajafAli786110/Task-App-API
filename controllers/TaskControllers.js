import { Apptasks } from "../model/TaskModel.js";

async function createNewTasks(req, res) {
  const userData = req.body;

  // Egge case, If user not filled any required field
  if (
    !userData ||
    !userData.task_name ||
    !userData.task_category ||
    !userData.task_duedate ||
    !userData.task_Priority ||
    !userData.task_status
  ) {
    return res
      .status(400)
      .json({ message: "Kindly Fill up all deatils Properly" });
  }

  // Main function
  try {
    const newTask = await Apptasks.create({
      task_name: userData.task_name,
      task_description: userData.task_description,
      task_duedate: userData.task_duedate,
      task_category: userData.task_category,
      task_Priority: userData.task_Priority,
      task_status: userData.task_status,
    });

    return res
      .status(200)
      .json({ NewTasks: newTask, message: "Created New Task Successfully" });
  } catch (error) {
    console.log("Somethings Fishy", error);
  }
}
async function getTasks(req, res) {
  try {
    const getAllTasks = await Apptasks.find({});
    return res
      .status(200)
      .json({ Tasks: getAllTasks, message: "Fetch Tasks Succcessfully" });
  } catch (error) {
    console.log("Somethings Fishy", error);
  }
}
async function updateTasks(req, res) {
  const id = req.params.id;
  const newUpdate = req.body;
  try {
    const updatedTask = await Apptasks.findByIdAndUpdate({ _id: id }, newUpdate, {
      new: true,
    });
    if (!updatedTask) return res.status.json({ message: "Task Not Found" });
    return res
      .status(200)
      .json({ afterUpdated: updatedTask, message: "Updated Successfully" });
  } catch (error) {
    console.log("Somethings Fishy in catch", error);
  }
}
async function deleteTasks(req, res) {
    const id = req.params.id;
  try {
    const deleteTask = await Apptasks.findByIdAndDelete({ _id: id });
    if (!deleteTask) return res.status.json({ message: "Task Not Found" });
    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    console.log("Somethings Fishy", error);
  }
}

export { createNewTasks, getTasks, updateTasks, deleteTasks };