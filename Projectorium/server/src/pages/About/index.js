import speakerImg from "../../images/speaker.jpg";
import './About.css';

const About = () => {
    return (
        <>
            <section>
            <div className="about-section">
  <h1>About Us</h1>
  <p>
    Welcome to <strong>Projectorium</strong>, your ultimate destination for discovering, sharing,  
    and managing projects across various domains. Whether you're a student, researcher,  
    or industry professional, our platform helps you showcase your work and find inspiration.  
  </p>
  <p>
    Our mission is to bridge the gap between innovation and accessibility by  
    providing a structured database where project ideas can thrive.  
    We aim to create a collaborative environment where knowledge is freely exchanged,  
    helping individuals learn from each other's experiences.
  </p>
  <p>
    Our team is composed of passionate individuals dedicated to building a  
    streamlined, user-friendly platform. We are constantly working to enhance  
    features that make project sharing more effective and engaging.
  </p>
  <p>
    Have questions or suggestions? Contact us at  
    <a href="mailto:projectorium@projectorium.com"> projectorium@projectorium.com</a>.  
    We'd love to hear from you!
  </p>
</div>

                
                <div>
                <center><div style={{borderRadius:"10px",boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", color: "white", backgroundColor:"#067062",marginBottom:"10px"}}><h2>Our Team</h2></div></center>
                        <div>
                        <ul className="team_list">
                            <li className="team_member">
                                <img src={speakerImg} alt="Project Manager" />
                                <h3>Narendar</h3>
                                <p>Project Manager</p>
                                
                            </li>
                            <li className="team_member">
                                <img src={speakerImg} alt="Lead Developer"/>
                                <h3>Skand Raaj</h3>
                                <p>Lead Developer</p>
                            </li>
                            <li className="team_member">
                                <img src={speakerImg} alt="UI/UX Designer"/>
                                <h3>Sai Srivatsa</h3>
                                <p>UI/UX Designer</p>
                            </li>
                            <li className="team_member">
                                <img src={speakerImg} alt="QA Engineer"/>
                                <h3>Sumukhendra</h3>
                                <p>QA Engineer</p>
                            </li>
                        </ul>
                        </div>
                </div>
            </section>
        </>
    );
};

export default About;