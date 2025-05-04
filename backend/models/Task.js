const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    default: "Not Started",
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  completedAt: { type: Date },
});

module.exports = mongoose.model("Task", taskSchema);
