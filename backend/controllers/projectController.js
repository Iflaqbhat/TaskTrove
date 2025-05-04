const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  const { title } = req.body;
  try {
    const projectCount = await Project.countDocuments({ user: req.user._id });
    if (projectCount >= 4) {
      return res.status(400).json({ message: "Maximum 4 projects allowed" });
    }
    const project = await Project.create({ title, user: req.user._id });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user._id });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
