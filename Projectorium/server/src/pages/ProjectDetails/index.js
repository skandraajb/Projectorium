import Projectzoom from "../../components/Projectzoom/Projectzoom";
import Rating from '@mui/material/Rating';
import './ProjectDetails.css';

const ProjectDetails = () => {
  return (
    <section>
      <div className="project-details-page">
        <div className="details-container">
          <div className="details-list">
            <Projectzoom />
            <div className="details-content-right" style={{ maxHeight: "85vh", overflowY: "auto" }}>
              <div className="project-title">
                <h1>Gesture Controlled Applicator</h1>
                <p className="project-subtitle">A project revolutionizing automation through gesture control and IoT technology</p>
              </div>

              <div className="project-metadata">
                <p><strong>Category:</strong> IoT</p>
                <p><strong>Tech Stack:</strong> React, Node.js, MongoDB, Arduino</p>
                <p><strong>Duration:</strong> 3 months</p>
              </div>

              <div className="project-description">
                <h2>Project Overview</h2>
                <p>
                  This project is an in-depth exploration into the potential of IoT-based solutions 
                  for automation in everyday appliances. With a focus on gesture control and ease of access,
                  we aim to revolutionize how users interact with technology. The system uses an Arduino-based platform,
                  integrating gesture control to manage appliances such as lights, fans, and other home devices.
                </p>
              </div>

              <div className="faculty-review">
                <h2>Faculty Review</h2>
                <p>
                  The project has received positive feedback for its innovative approach and potential impact 
                  in the automation space. The integration of IoT and gesture control is particularly impressive, 
                  and the use of Arduino as the base platform is both practical and accessible for future developments.
                </p>
              </div>

              <div className="rating-section">
                <b>Rating:</b>
                <Rating name="read-only" value={5} readOnly />
              </div>

              <div className="applications">
                <h2>Applications</h2>
                <ul>
                  <li>Home automation systems</li>
                  <li>Gesture-controlled appliances</li>
                  <li>Assistive technologies for disabled individuals</li>
                  <li>Smart home devices and appliances</li>
                </ul>
              </div>

              <div className="certifications">
                <h3>Certifications</h3>
                <p>Issued by: XYZ University</p>
                <p><strong>Certification ID:</strong> 123456789</p>
              </div>

              <div className="future-scope">
                <h2>Future Scope</h2>
                <p>
                  With further development, this project can be expanded to include more appliances, 
                  support for multiple users, and integration with voice assistants like Alexa or Google Assistant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
