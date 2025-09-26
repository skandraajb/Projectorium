
import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import './Signin.css';



const Signin=()=>{
    const { setshowheaderfooter } = useContext(MyContext );
    useEffect(() => {
        setshowheaderfooter(false); 
        return () => setshowheaderfooter(true); 
      }, [setshowheaderfooter]);
   
    return(
        <>
    <section>
    <div className="signin-container">
          <div className="signin-content">
            
            <div className="signin-form">
            <div className="signin-logo"></div>
              <h3 style={{color: '#067062'}}>Sign In</h3>
              <p style={{marginLeft:'20px',marginTop:'10px',fontSize:'15px',fontStyle:'normal'}}>Welcome back!</p>
              <div className="email-input"> 
              <input
                type="email"
                placeholder="Email"
               className="em-i"
              />
              </div>
              <div className="password-input">
               <input
                type="password"
                placeholder="Password"
               className="pas-i"
              />
              </div>
              <div className="forgot-pas">
                <p>Forgot password?</p>
              </div>
              <div className="sign-button">
                <button className="signin-b">Sign In</button>
              </div>
              <div className="sign-cancel">
               
              <Link to="/">
                <button className="signin-cancel">Cancel</button>
                </Link>             
              </div>
              
              <div className="not">
              <p>Not Registered?</p>
              <Link to="/Signup">Signup</Link>
              </div>
             
              <div className="other">
                <h3>Or Continue with other Social Account</h3>
              </div>
              <div className="google-sign"></div>
            </div>
          </div>
        </div>
    </section>
        </>
    )
}
export default Signin;