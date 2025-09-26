// src/pages/Home/index.js
import Rating from '@mui/material/Rating';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchDataFromApi } from '../../utils/api';
import './home.css';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchDataFromApi('/api/projects');
        setProjects(data);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setError('Cannot load projects at this time. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>{error}</div>;

  // Group projects by category (or adjust as needed)
  const softwareProjects = projects.filter(p => p.category.toLowerCase().includes('software'));
  const iotProjects = projects.filter(p => p.category.toLowerCase().includes('iot'));
  const otherProjects = projects.filter(p => !p.category.toLowerCase().includes('software') && !p.category.toLowerCase().includes('iot'));

  return (
    <>
      <div className="banner-container">
        <Swiper
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="bannerSwiper"
        >
          <SwiperSlide className="simg3"></SwiperSlide>
          <SwiperSlide className="simg2"></SwiperSlide>
          <SwiperSlide className="simg4"></SwiperSlide>
          <SwiperSlide className="happy"></SwiperSlide>
          <SwiperSlide className="simg1"></SwiperSlide>
        </Swiper>
      </div>

      {/* Software Projects */}
      <div className="fivestar-container" style={{ marginTop: "20px", marginLeft: "10px", marginRight: "10px" }}>
        <center>
          <h2 style={{ borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", color: "white", backgroundColor: "#067062", marginBottom: "10px" }}>
            Software Projects
          </h2>
        </center>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          breakpoints={{
            1024: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            540: { slidesPerView: 2 },
            360: { slidesPerView: 1 },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={false}
          modules={[Navigation, Autoplay]}
          style={{ marginTop: "30px" }}
          className="fivestar custom-swiper"
        >
          {softwareProjects.length > 0 ? (
            softwareProjects.map(project => (
              <SwiperSlide key={project._id}>
                <div className="firstone">
                  <div>
                    <Link to={`/ProjectDetails/${project._id}`}>
                      <button className="fimg1" style={{ backgroundImage: project.images[0]?.url ? `url(${project.images[0].url})` : 'none' }}></button>
                    </Link>
                  </div>
                  <p><b>{project.projectTitle.toUpperCase()}</b></p>
                  <p><b>Rating:</b> <Rating name="read-only" value={project.rating || 4} readOnly /></p>
                  <p><b>Certified by:</b></p>
                  <p>{project.certifiedBy || 'Unknown'}</p>
                  <p className="designation">{project.certifiedByTitle || 'Professor'}</p>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="firstone">
                <p>No software projects available.</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      {/* IoT-based Projects */}
      <div className="fivestar-container" style={{ marginTop: "20px", marginLeft: "10px", marginRight: "10px" }}>
        <center>
          <div style={{ borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", color: "white", backgroundColor: "#067062", marginBottom: "10px" }}>
            <h2>IoT-based Projects</h2>
          </div>
        </center>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          breakpoints={{
            1024: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            540: { slidesPerView: 2 },
            360: { slidesPerView: 1 },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={false}
          modules={[Navigation, Autoplay]}
          style={{ marginTop: "30px" }}
          className="fivestar custom-swiper"
        >
          {iotProjects.length > 0 ? (
            iotProjects.map(project => (
              <SwiperSlide key={project._id}>
                <div className="firstone">
                  <div>
                    <Link to={`/ProjectDetails/${project._id}`}>
                      <button className="fimg1" style={{ backgroundImage: project.images[0]?.url ? `url(${project.images[0].url})` : 'none' }}></button>
                    </Link>
                  </div>
                  <p><b>{project.projectTitle.toUpperCase()}</b></p>
                  <p><b>Rating:</b> <Rating name="read-only" value={project.rating || 4} readOnly /></p>
                  <p><b>Certified by:</b></p>
                  <p>{project.certifiedBy || 'Unknown'}</p>
                  <p className="designation">{project.certifiedByTitle || 'Professor'}</p>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="firstone">
                <p>No IoT projects available.</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      {/* Other Top Projects */}
      <div className="fivestar-container" style={{ marginTop: "20px", marginLeft: "10px", marginRight: "10px" }}>
        <center>
          <h2 style={{ borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", color: "white", backgroundColor: "#067062", marginBottom: "10px" }}>
            Other Top Projects
          </h2>
        </center>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          breakpoints={{
            1024: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            540: { slidesPerView: 2 },
            360: { slidesPerView: 1 },
          }}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={false}
          modules={[Navigation, Autoplay]}
          style={{ marginTop: "30px" }}
          className="fivestar custom-swiper"
        >
          {otherProjects.length > 0 ? (
            otherProjects.map(project => (
              <SwiperSlide key={project._id}>
                <div className="firstone">
                  <div>
                    <Link to={`/ProjectDetails/${project._id}`}>
                      <button className="fimg1" style={{ backgroundImage: project.images[0]?.url ? `url(${project.images[0].url})` : 'none' }}></button>
                    </Link>
                  </div>
                  <p><b>{project.projectTitle.toUpperCase()}</b></p>
                  <p><b>Rating:</b> <Rating name="read-only" value={project.rating || 4} readOnly /></p>
                  <p><b>Certified by:</b></p>
                  <p>{project.certifiedBy || 'Unknown'}</p>
                  <p className="designation">{project.certifiedByTitle || 'Professor'}</p>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="firstone">
                <p>No other projects available.</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default Home;