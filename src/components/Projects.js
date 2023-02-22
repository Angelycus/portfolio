import React from "react";
import Parallax from 'react-rellax';
import CK from '../CK-cover.jpg';
import blog from '../blog-cover.jpg';
import SMS from '../sms-cover.jpg';
import crypto from '../crypto-cover.jpg';
import rusenje from '../rusenje-cover.jpg';
import YT from '../YT-cover.png';
import port from '../port-cover.jpg';

const Projects = () => {
    return (
<div className="projects">
<div className="container-fluid">
<Parallax speed={ 0 }>
    <h2>PROJECTS</h2>
</Parallax>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={CK} className="d-block w-100" alt="CK" />
      <div className="carousel-caption">
        <p>A simple brochure site for a small restaurant (HTML, CSS)</p>
        <p>Links: <a href="https://hkrestaurant.netlify.app/index.html" target="_blank">Site</a> <a href="https://github.com/Angelycus/restaurant-brochure.git" target="_blank">Github</a></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={crypto} className="d-block w-100" alt="blog" />
      <div className="carousel-caption">
        <p>Crypto Price Grab in real-time with connection to outside API (HTML, CSS, JavaScript)</p>
        <p>Links: <a href="https://cryptopricegrab.netlify.app/" target="_blank">Site</a> <a href="https://github.com/Angelycus/crypto-web-api-app.git" target="_blank">Github</a></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={blog} className="d-block w-100" alt="blog" />
      <div className="carousel-caption">
        <p>Photo Blog Site (WordPress)</p>
        <p>Links: <a href="https://nick437478807.wordpress.com/" target="_blank">Site</a></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={SMS} className="d-block w-100" alt="SMS" />
      <div className="carousel-caption">
        <p>E-commerce Online Store (WordPress, WooCommerce)</p>
        <p>Links: <a href="https://smartmobilesolution.hr/" target="_blank">Site</a></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={rusenje} className="d-block w-100" alt="blog" />
      <div className="carousel-caption">
        <p>Brochure site for a local business (Tilda)</p>
        <p>Links: <a href="http://rusenjedrveca.tilda.ws/" target="_blank">Site</a></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={YT} className="d-block w-100" alt="blog" />
      <div className="carousel-caption">
        <p>YouTube channel about basketball (Adobe Premiere Pro)</p>
        <p>Links: <a href="https://www.youtube.com/channel/UCjP-k1MZh5W9Zs_Ii0tUYRQ" target="_blank">Site</a></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={port} className="d-block w-100" alt="blog" />
      <div className="carousel-caption">
        <p>This portfolio site (React.js, Bootstrap 5, CSS, JavaScript)</p>
        <p>Links: <a href="https://github.com/Angelycus/portfolio.git" target="_blank">Github</a></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
        )
    }
    
    export default Projects;
