// src/pages/UploadProject/index.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postDataToApi } from '../../utils/api';
import './UploadProject.css';

const UploadProject = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    projectTitle: '',
    subtitle: '',
    category: '',
    techStack: '',
    duration: '',
    projectOverview: '',
    facultyReview: '',
    applications: '',
    certifications: '',
    futureScope: ''
  });

  const [images, setImages] = useState([]);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];

    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push({ file, url: reader.result });
        if (newImages.length === files.length) {
          setImages(prev => [...prev, ...newImages]);
          if (images.length === 0) setPreviewIndex(0);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleThumbnailClick = (index) => {
    setPreviewIndex(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const payload = {
      ...formData,
      images: images.map(img => img.url)
    };

    console.log('Sending payload to /api/projects/create:', payload);

    try {
      const response = await postDataToApi('/api/projects/create', payload);
      console.log('Upload response:', response);
      setSuccess('Project uploaded successfully!');
      navigate(`/ProjectDetails/${response.project._id}`);
      setFormData({
        projectTitle: '',
        subtitle: '',
        category: '',
        techStack: '',
        duration: '',
        projectOverview: '',
        facultyReview: '',
        applications: '',
        certifications: '',
        futureScope: ''
      });
      setImages([]);
      setPreviewIndex(0);
    } catch (error) {
      console.error('Upload failed:', error);
      setError(`Failed to upload project: ${error.message}. Please check if the backend route /api/projects/create is available.`);
    }
  };

  return (
    <section className="upload-project-section">
      <div className="upload-project-wrapper">
        <div className="upload-project-left">
          <div className="upload-thumbnail-display">
            <div className="upload-main-thumbnail">
              {images.length > 0 ? (
                <img src={images[previewIndex].url} alt="Project preview" className="main-preview-image" />
              ) : (
                <label htmlFor="image-upload" className="upload-placeholder">
                  Click to upload image
                </label>
              )}
            </div>
            <div className="upload-thumbnail-list">
              {images.length === 0 ? (
                <div className="upload-thumb-item placeholder">
                  <p>No images uploaded yet</p>
                </div>
              ) : (
                images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`upload-thumb-item ${idx === previewIndex ? 'active' : ''}`}
                    onClick={() => handleThumbnailClick(idx)}
                  >
                    <img src={img.url} alt={`thumb-${idx}`} className="thumbnail-image" />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="upload-project-right">
          <form className="upload-form-container" onSubmit={handleSubmit}>
            {success && <p className="success-message">{success}</p>}
            {error && <p className="error-message">{error}</p>}

            {[
              { label: 'Project Title', name: 'projectTitle' },
              { label: 'Subtitle', name: 'subtitle' },
              { label: 'Category', name: 'category' },
              { label: 'Tech Stack', name: 'techStack' },
              { label: 'Duration', name: 'duration' }
            ].map(({ label, name }) => (
              <div className="upload-form-group" key={name}>
                <label>{label}</label>
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={`Enter ${label.toLowerCase()}`}
                />
              </div>
            ))}

            {[
              { label: 'Project Overview', name: 'projectOverview', rows: 4 },
              { label: 'Faculty Review', name: 'facultyReview', rows: 3 },
              { label: 'Applications', name: 'applications', rows: 3 },
              { label: 'Certifications', name: 'certifications', rows: 2 },
              { label: 'Future Scope', name: 'futureScope', rows: 3 }
            ].map(({ label, name, rows }) => (
              <div className="upload-form-group" key={name}>
                <label>{label}</label>
                <textarea
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  rows={rows}
                  placeholder={`Enter ${label.toLowerCase()}`}
                />
              </div>
            ))}

            <div className="upload-form-group">
              <label htmlFor="image-upload">Upload Images</label>
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
              {images.length > 0 && <p>{images.length} image(s) selected</p>}
            </div>

            <div className="upload-form-submit">
              <button type="submit">Upload Project</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UploadProject;