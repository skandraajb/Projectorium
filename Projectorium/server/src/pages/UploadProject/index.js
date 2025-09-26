import React, { useState } from 'react';
import './UploadProject.css';

const UploadProject = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('Uploaded Images:', images);
  };

  return (
    <section className="upload-project-section">
      <div className="upload-project-wrapper">
        {/* Left preview area */}
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

        {/* Right form area */}
        <div className="upload-project-right">
          <form className="upload-form-container" onSubmit={handleSubmit}>
            {/* All form fields with placeholders */}
            <div className="upload-form-group">
              <label>Project Title</label>
              <input
                type="text"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                placeholder="Enter the project title"
              />
            </div>

            <div className="upload-form-group">
              <label>Subtitle</label>
              <input
                type="text"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleChange}
                placeholder="Enter a brief subtitle"
              />
            </div>

            <div className="upload-form-group">
              <label>Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Select or enter category"
              />
            </div>

            <div className="upload-form-group">
              <label>Tech Stack</label>
              <input
                type="text"
                name="techStack"
                value={formData.techStack}
                onChange={handleChange}
                placeholder="Enter technologies used"
              />
            </div>

            <div className="upload-form-group">
              <label>Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Enter project duration"
              />
            </div>

            <div className="upload-form-group">
              <label>Project Overview</label>
              <textarea
                name="projectOverview"
                value={formData.projectOverview}
                onChange={handleChange}
                rows="4"
                placeholder="Provide a brief overview of the project"
              />
            </div>

            <div className="upload-form-group">
              <label>Faculty Review</label>
              <textarea
                name="facultyReview"
                value={formData.facultyReview}
                onChange={handleChange}
                rows="3"
                placeholder="Provide the faculty review"
              />
            </div>

            <div className="upload-form-group">
              <label>Applications</label>
              <textarea
                name="applications"
                value={formData.applications}
                onChange={handleChange}
                rows="3"
                placeholder="Mention applications of the project"
              />
            </div>

            <div className="upload-form-group">
              <label>Certifications</label>
              <textarea
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                rows="2"
                placeholder="List any certifications received"
              />
            </div>

            <div className="upload-form-group">
              <label>Future Scope</label>
              <textarea
                name="futureScope"
                value={formData.futureScope}
                onChange={handleChange}
                rows="3"
                placeholder="Explain the future scope of the project"
              />
            </div>

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
