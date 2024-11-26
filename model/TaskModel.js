import mongoose from "mongoose";

const Tasks = new mongoose.Schema(
  {
    task_name: {
      type: String,
      required: true,
    },
    task_description: {
      type: String,
      required: false,
    },
    task_duedate: {
      type: Date,
      required: true,
    },
    task_category: {
      type: String,
      required: true,
      unique: true,
    },
    task_Priority: {
      type: String,
      required: true,
    },
    task_status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Apptasks = mongoose.model("tasks", Tasks, "tasks");
export { Apptasks };
