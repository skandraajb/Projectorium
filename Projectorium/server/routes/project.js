// server/routes/project.js
import express from 'express';
import Project from '../models/project.js';

const router = express.Router();

// Add GET /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});

// Optional: GET /:id for efficiency
router.get('/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});

// Existing POST /create
router.post('/create', async (req, res) => {
  console.log('Received request:', req.body);
  try {
    const {
      projectTitle,
      subtitle,
      category,
      techStack,
      duration,
      projectOverview,
      facultyReview,
      applications,
      certifications,
      futureScope,
      images
    } = req.body;

    if (!images || !Array.isArray(images)) {
      return res.status(400).json({ message: 'Images must be an array' });
    }

    const formattedImages = images.map((base64String, index) => ({
      url: base64String,
      filename: `image-${index + 1}.jpeg`
    }));

    const newProject = new Project({
      projectTitle,
      subtitle,
      category,
      techStack,
      duration,
      projectOverview,
      facultyReview,
      applications,
      certifications,
      futureScope,
      images: formattedImages
    });

    await newProject.save();
    res.status(201).json({ message: 'Project uploaded successfully', project: newProject });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});

// Existing DELETE /:id
router.delete('/:id', async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await Project.findByIdAndDelete(projectId);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});

export default router;