// src/components/header/header.js
import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoIosContact, IoIosMenu, IoMdArrowDropup } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user')); // Get user from localStorage

  // Function to toggle the drawer
  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    setOpen(false); // Close drawer
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="navbar-logo">
            <Link to="/">
              <div className="logo"></div>
            </Link>
          </div>

          <div className="nav-search">
            <input
              type="text"
              placeholder="Search Projectorium"
              className="search-input"
            />
            <div className="search-icon">
              <FaSearch />
            </div>
          </div>

          <div className="nav-login">
            <button className="login">
              <IoIosContact className="contact" />
              <p>Account</p>
            </button>
            <div className="nav-submenu">
              <IoMdArrowDropup className="nav-submenu-arrowup" />
              <label>
                <div className="submenu-signin">
                  {user ? (
                    <>
                      <button disabled>{user.name}</button>
                      <p>Welcome</p>
                    </>
                  ) : (
                    <>
                      <Link to="/SignIn" className="no-underline">
                        <button>Sign in</button>
                      </Link>
                      <p>New customer? Start here.</p>
                    </>
                  )}
                </div>
              </label>
            </div>
          </div>

          <div className="nav-about">
            <Link to="/about" className="no-underline">
              <button className="about">
                <CiCircleInfo className="ab-info" />
                <p>About us</p>
              </button>
            </Link>
          </div>

          <div className="nav-ccare">
            <Link to="/contactus" className="no-underline">
              <button className="care">
                <RiCustomerService2Fill className="care-info" />
                <p>24x7 Customer Care</p>
              </button>
            </Link>
          </div>

          {/* Right Side Sidebar (Drawer) */}
          <div className="sidemenu">
            <div className="sidemenu-content">
              <IconButton onClick={toggleDrawer(true)}>
                <IoIosMenu className="menu" />
              </IconButton>

              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} className="draw-sidebar">
                <center>
                  <h2 style={{ color: "#067062", marginTop: "10px", marginBottom: "30px" }}>
                    CONTENTS
                  </h2>
                </center>
                <div className="top-button">
                  <Link to="/">
                    <button className="homebutton">Home</button>
                  </Link>
                  <Link to="/">
                    <button className="categories">Categories</button>
                  </Link>
                  <Link to="/">
                    <button className="dashboard">Dashboard</button>
                  </Link>
                  <Link to="/UploadProject">
                    <button className="uploadbutton">Upload project</button>
                  </Link>
                  <Link to="/about">
                    <button className="aboutbutton">About us</button>
                  </Link>
                  <Link to="/contactus">
                    <button className="contactus">Contact us</button>
                  </Link>
                </div>
                <div className="bottom-button">
                  {user ? (
                    <Link to="/">
                      <button className="logoutbutton" onClick={handleLogout}>
                        Logout
                      </button>
                    </Link>
                  ) : (
                    <Link to="/SignIn">
                      <button className="logoutbutton">Sign in</button>
                    </Link>
                  )}
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;