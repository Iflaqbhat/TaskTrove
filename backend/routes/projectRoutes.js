const express = require("express");
const Project = require("../models/Project");
const { authMiddleware } = require("./authRoutes");

const router = express.Router();

// Get all projects for a user
router.get("/", authMiddleware, async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.user._id });
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Create a project
router.post("/", authMiddleware, async (req, res) => {
  const { title } = req.body;
  try {
    if (!title) return res.status(400).json({ message: "Title is required" });
    const project = new Project({ title, userId: req.user._id });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
