// src/pages/Signin/Signin.js
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import { postDataToApi } from '../../utils/api';
import './Signin.css';

const Signin = () => {
  const { setshowheaderfooter } = useContext(MyContext);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setshowheaderfooter(false);
    return () => setshowheaderfooter(true);
  }, [setshowheaderfooter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await postDataToApi('/api/users/login', formData);
      localStorage.setItem('user', JSON.stringify(response.user));
      enqueueSnackbar('Logged in successfully!', { variant: 'success' });
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (err) {
      console.error('Signin error:', err);
      if (err.response?.status === 500) {
        setError('Server error occurred. Please try again later or contact support.');
      } else if (err.response?.status === 404) {
        setError('Login service unavailable. Please try again later.');
      } else {
        setError(err.response?.data?.message || 'Failed to sign in. Please check your email or password.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="signin-container">
        <div className="signin-content">
          <div className="signin-form">
            <div className="signin-logo"></div>
            <h3 style={{ color: '#067062' }}>Sign In</h3>
            <p style={{ marginLeft: '20px', marginTop: '10px', fontSize: '15px', fontStyle: 'normal' }}>
              Welcome back!
            </p>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="email-input">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="em-i"
                  required
                />
              </div>
              <div className="password-input">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="pas-i"
                  required
                />
              </div>
              <div className="forgot-pas">
                <p>Forgot password?</p>
              </div>
              <div className="sign-button">
                <button type="submit" className="signin-b" disabled={loading}>
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
              </div>
            </form>
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
  );
};

export default Signin;