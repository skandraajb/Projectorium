import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import './Signup.css';


const Signup = () => {
  const { setshowheaderfooter } = useContext(MyContext);
  useEffect(() => {
    setshowheaderfooter(false);
    return () => setshowheaderfooter(true);
  }, [setshowheaderfooter]);

  return (
    <>
      <section>
        <div className="signin-container">
          <div className="signin-content">
            
            <div className="signin-form">
            <div className="signin-logo"></div>
              <h3 style={{color: '#067062'}}>Create Account</h3>
              <div className="Name_i">
                <input
                  type="text"
                  placeholder="First Name"
                  className="firstname"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="lastname"
                />
                </div>
              <div className="Contact">
              <input
              type="text"
              placeholder="Contact no"
              className="contact_i"
              />
              </div>
              
              <div className="signup-email-input">
                <input type="email" placeholder="Email" className="em-i" />
              </div>
              <div className="signup-password-input">
                <input
                  type="password"
                  placeholder="Password"
                  className="pas-i"
                />
              </div>
              <div className="sign-button">
                <button className="signin-b">Sign Up</button>
              </div>
              <div className="sign-cancel">
              <Link to="/">
                <button className="signin-cancel">Cancel</button>
                </Link>              </div>

              <div className="not">
              <p>Not Registered?</p>
              <Link to="/Signin">Signin</Link>
              </div>

              <div className="other">
                <h3>Or Continue with other Social Account</h3>
              </div>
              <div className="google-signup"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signup;

  