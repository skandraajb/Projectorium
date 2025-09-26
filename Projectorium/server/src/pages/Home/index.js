import "swiper/css"; 
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from '@mui/material/Rating';
import './home.css';
import { Link } from "react-router-dom";



const Home=()=>{
    return(
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
      <div className="fivestar-container" style={{marginTop: "20px",marginLeft:"10px",marginRight:"10px"}}>
      <center><h2 style={{borderRadius:"10px",boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", color: "white", backgroundColor:"#067062",marginBottom:"10px"}}>Software Projects</h2></center>
      <Swiper
        spaceBetween={10}  
        slidesPerView={5}
        breakpoints={{
          1024: { slidesPerView: 5 },
          992: { slidesPerView: 4},
          768: { slidesPerView: 3 },
          540: { slidesPerView: 2 },
          360: { slidesPerView: 1 },
        }}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={false}
        modules={[Navigation, Autoplay]}
        style={{marginTop: "30px"}}
        className="fivestar custom-swiper"
        >
  <SwiperSlide>
    <div class="firstone">
    <div class=""><button className="fimg1" onClick={() => {}}></button></div>
    <p><b>PROJECTORIUM</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={5} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mrs. Adilaxmi</p>
    <p class="designation">Associate Proffessor</p>
    </div>
  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg2" onClick={() => {}}></button></Link></div>
    <p><b>GESTURE CONTROLLED APPLICATOR</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={5} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Srimanth Pal</p>
    <p class="designation">Associate Proffessor</p>


    </div>  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg3" onClick={() => {}}></button></Link></div>
    <p><b>PUSTAK CLUB</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={4} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Srimanth Pal</p>
    <p class="designation">Associate Proffessor</p>

    </div>  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg4" onClick={() => {}}></button></Link></div>
    <p><b>LASER HOME SECURITY SYSTEM</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={5} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Noel Nalli</p>
    <p class="designation">Proffessor</p>

    </div>  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg5" onClick={() => {}}></button></Link></div>
    <p><b>SMART ROVER</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={4} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Raju Nayak</p>
    <p class="designation">Senior Proffessor</p>

    </div>  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg6" onClick={() => {}}></button></Link></div>
    <p><b>HAPPY SOUL</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={5} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Srimanth Pal</p>
    <p class="designation">Associate Proffessor</p>

    </div>  </SwiperSlide>
</Swiper>
      </div>
      <div className="fivestar-container" style={{marginTop: "20px",marginLeft:"10px",marginRight:"10px"}}>
      <center><div style={{borderRadius:"10px",boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", color: "white", backgroundColor:"#067062",marginBottom:"10px"}}><h2>IOT-based Projects</h2></div></center>
        <Swiper
        spaceBetween={10}  
        slidesPerView={5}
        breakpoints={{
          1024: { slidesPerView: 5 },
          992: { slidesPerView: 4},
          768: { slidesPerView: 3 },
          540: { slidesPerView: 2 },
          360: { slidesPerView: 1 },
        }}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={false}
        modules={[Navigation, Autoplay]}
        style={{marginTop: "30px"}}
        className="fivestar custom-swiper"
        >
  <SwiperSlide>
    <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg1" onClick={() => {}}></button></Link></div>
    <p><b>PROJECTORIUM</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={5} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mrs. Adilaxmi</p>
    <p class="designation">Associate Proffessor</p>

    </div>
  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg2" onClick={() => {}}></button></Link></div>
    <p><b>GESTURE CONTROLLED APPLICATOR</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={5} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Srimanth Pal</p>
    <p class="designation">Associate Proffessor</p>

    </div>  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg3" onClick={() => {}}></button></Link></div>
    <p><b>PUSTAK CLUB</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={4} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Srimanth Pal</p>
    <p class="designation">Associate Proffessor</p>


    </div>  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg4" onClick={() => {}}></button></Link></div>
    <p><b>LASER HOME SECURITY SYSTEM</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={5} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Noel Nalli</p>
    <p class="designation">Proffessor</p>

    </div>  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg5" onClick={() => {}}></button></Link></div>
    <p><b>SMART ROVER</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={4} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Raju Nayak</p>
    <p class="designation">Senior Proffessor</p>

    </div>  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg6" onClick={() => {}}></button></Link></div>
    <p><b>HAPPY SOUL</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={5} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Srimanth Pal</p>
    <p class="designation">Associate Proffessor</p>

    </div>  </SwiperSlide>
</Swiper>
      </div>
      <div className="fivestar-container" style={{marginTop: "20px",marginLeft:"10px",marginRight:"10px"}}>
        <center><h2 style={{borderRadius:"10px",boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", color: "white", backgroundColor:"#067062",marginBottom:"10px"}}>Other top Projects</h2></center>
        <Swiper
        spaceBetween={10}  
        slidesPerView={5}
        breakpoints={{
          1024: { slidesPerView: 5 },
          992: { slidesPerView: 4},
          768: { slidesPerView: 3 },
          540: { slidesPerView: 2 },
          360: { slidesPerView: 1 },
        }}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={false}
        modules={[Navigation, Autoplay]}
        style={{marginTop: "30px"}}
        className="fivestar custom-swiper"
        >
  <SwiperSlide>
    <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg1" onClick={() => {}}></button></Link></div>
    <p><b>PROJECTORIUM</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={5} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mrs. Adilaxmi</p>
    <p class="designation">Associate Proffessor</p>

    </div>
  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg2" onClick={() => {}}></button></Link></div>
    <p><b>GESTURE CONTROLLED APPLICATOR</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={5} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Srimanth Pal</p>
    <p class="designation">Associate Proffessor</p>

    </div>  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg3" onClick={() => {}}></button></Link></div>
    <p><b>PUSTAK CLUB</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={4} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Srimanth Pal</p>
    <p class="designation">Associate Proffessor</p>

    </div>  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg4" onClick={() => {}}></button></Link></div>
    <p><b>LASER HOME SECURITY SYSTEM</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={5} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Noel Nalli</p>
    <p class="designation">Proffessor</p>

    </div>  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg5" onClick={() => {}}></button></Link></div>
    <p><b>SMART ROVER</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={4} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Raju Nayak</p>
    <p class="designation">Senior Proffessor</p>

    </div>  </SwiperSlide>
  <SwiperSlide>
  <div class="firstone">
    <div class=""><Link to="/ProjectDetails"><button className="fimg6" onClick={() => {}}></button></Link></div>
    <p><b>HAPPY SOUL</b></p>
    <p><b>Rating:</b> <Rating name="read-only" value={5} readOnly /></p>
    <p><b>Certified by:</b></p>
    <p>Mr. Srimanth Pal</p>
    <p class="designation">Associate Proffessor</p>

    </div>  </SwiperSlide>
</Swiper>
      </div>
        </>
    )
}
export default Home;