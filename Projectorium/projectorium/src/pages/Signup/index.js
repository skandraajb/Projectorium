// src/pages/Signup/Signup.js
import { useSnackbar } from 'notistack';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import { postDataToApi } from '../../utils/api';
import './Signup.css';

const Signup = () => {
  const { setshowheaderfooter } = useContext(MyContext);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      password: formData.password
    };

    try {
      const response = await postDataToApi('/api/users/signup', payload);
      localStorage.setItem('user', JSON.stringify(response.user));
      enqueueSnackbar('Account created successfully! Please sign in.', { variant: 'success' });
      setTimeout(() => {
        navigate('/Signin');
      }, 3000); // Redirect to Signin after snackbar
    } catch (err) {
      if (err.response?.status === 404) {
        setError('Signup service unavailable. Please try again later.');
      } else {
        setError(err.response?.data?.message || 'Failed to create account. Please try again.');
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
            <h3 style={{ color: '#067062' }}>Create Account</h3>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="Name_i">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="name-input"
                  required
                />
              </div>
              <div className="Contact">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact no"
                  className="contact_i"
                  required
                />
              </div>
              <div className="signup-email-input">
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
              <div className="signup-password-input">
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
              <div className="sign-button">
                <button type="submit" className="signin-b" disabled={loading}>
                  {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>
            </form>
            <div className="sign-cancel">
              <Link to="/">
                <button className="signin-cancel">Cancel</button>
              </Link>
            </div>
            <div className="not">
              <p>Already Registered?</p>
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
  );
};

export default Signup;