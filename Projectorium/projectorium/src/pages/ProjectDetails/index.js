
import Rating from '@mui/material/Rating';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../../utils/api';
import Projectzoom from "../Projectzoom/Projectzoom";
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      setLoading(true);
      setError(null);

      console.log('Navigated to ProjectDetails with ID:', id, 'URL:', window.location.pathname);

      if (!id) {
        console.warn('No project ID provided. Redirecting to home. Referrer:', document.referrer);
        setError('Invalid project URL. Please select a project from the home page.');
        setLoading(false);
        navigate('/');
        return;
      }

      try {
        
        console.log('Fetching projects from /api/projects');
        const projects = await fetchDataFromApi('/api/projects');
        const foundProject = projects.find(p => p._id === id);
        if (!foundProject) {
          throw new Error('Project not found.');
        }
        setProject(foundProject);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load project details. Backend route /api/projects is missing.');
      } finally {
        setLoading(false);
      }
    };
    loadProject();
  }, [id, navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!project) return <div>Project not found.</div>;

  return (
    <section>
      <div className="project-details-page">
        <div className="details-container">
          <div className="details-list">
            <Projectzoom images={project.images} />
            <div className="details-content-right" style={{ maxHeight: '85vh', overflowY: 'auto' }}>
              <div className="project-title">
                <h1>{project.projectTitle}</h1>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>

              <div className="project-metadata">
                <p><strong>Category:</strong> {project.category}</p>
                <p><strong>Tech Stack:</strong> {project.techStack}</p>
                <p><strong>Duration:</strong> {project.duration}</p>
              </div>

              <div className="project-description">
                <h2>Project Overview</h2>
                <p>{project.projectOverview}</p>
              </div>

              <div className="faculty-review">
                <h2>Faculty Review</h2>
                <p>{project.facultyReview}</p>
              </div>

              <div className="rating-section">
                <b>Rating:</b>
                <Rating name="read-only" value={project.rating || 4} readOnly />
              </div>

              <div className="applications">
                <h2>Applications</h2>
                <ul>
                  {project.applications ? (
                    project.applications.split(',').map((app, idx) => (
                      <li key={idx}>{app.trim()}</li>
                    ))
                  ) : (
                    <li>No applications listed.</li>
                  )}
                </ul>
              </div>

              <div className="certifications">
                <h3>Certifications</h3>
                <p>{project.certifications || 'No certifications listed.'}</p>
              </div>

              <div className="future-scope">
                <h2>Future Scope</h2>
                <p>{project.futureScope}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;