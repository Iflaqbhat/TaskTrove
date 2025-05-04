const Task = require("../models/Task");
const Project = require("../models/Project");

exports.createTask = async (req, res) => {
  const { projectId, title, description, status } = req.body;
  try {
    const project = await Project.findById(projectId);
    if (!project || project.user.toString() !== req.user._id.toString()) {
      return res
        .status(404)
        .json({ message: "Project not found or unauthorized" });
    }
    const task = await Task.create({
      project: projectId,
      user: req.user._id,
      title,
      description,
      status,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTasks = async (req, res) => {
  const { projectId } = req.params;
  try {
    const tasks = await Task.find({ project: projectId, user: req.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    const task = await Task.findById(id);
    if (!task || task.user.toString() !== req.user._id.toString()) {
      return res
        .status(404)
        .json({ message: "Task not found or unauthorized" });
    }
    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    if (status === "Completed" && !task.completedAt) {
      task.completedAt = new Date();
    }
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task || task.user.toString() !== req.user._id.toString()) {
      return res
        .status(404)
        .json({ message: "Task not found or unauthorized" });
    }
    await task.deleteOne();
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
