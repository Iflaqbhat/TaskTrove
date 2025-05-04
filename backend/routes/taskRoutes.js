const express = require("express");
const Task = require("../models/Task");
const { authMiddleware } = require("./authRoutes");

const router = express.Router();

// Get tasks for a project
router.get("/:projectId", authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Create a task
router.post("/", authMiddleware, async (req, res) => {
  const { title, description, status, projectId } = req.body;
  try {
    if (!title || !projectId)
      return res
        .status(400)
        .json({ message: "Title and projectId are required" });
    const task = new Task({
      title,
      description,
      status: status || "Not Started",
      projectId,
    });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Update a task
router.put("/:id", authMiddleware, async (req, res) => {
  const { status } = req.body;
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    task.status = status || task.status;
    if (status === "Completed") task.completedAt = new Date();
    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a task
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    await task.deleteOne();
    res.json({ message: "Task deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
