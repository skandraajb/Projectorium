import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  url: String,
  filename: String,
});

const projectSchema = new mongoose.Schema({
  projectTitle: String,
  subtitle: String,
  category: String,
  techStack: String,
  duration: String,
  projectOverview: String,
  facultyReview: String,
  applications: String,
  certifications: String,
  futureScope: String,
  images: [imageSchema], // ✅ now this works!
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;
