import React from 'react';
import coding from '../coding.gif';
import administrating from '../administrating.gif';
import videoedit from '../videoedit.gif';
import Parallax from 'react-rellax';

const Services = () => {
    return (
  <div className="services-cards">
  <div>
  <Parallax speed={ 0 }>
    <h2>SERVICES</h2>
    <div className="row row-cols-1 row-cols-xl-3 g-3">
    <div class="col">
  <div className="card text-white bg-success border-light h-100">
  <img src={coding} alt="coding" />
    <div className="card-body">
      <h5 className="card-title">Website Developing</h5>
      <p className="card-text">Creating awesome websites with variety of frameworks and platforms that best suits Your needs.</p>
      </div>
      </div>
  </div>
  <div class="col">
  <div className="card text-white bg-success border-light h-100">
  <img src={administrating} alt="administrating" />
    <div className="card-body">
      <h5 className="card-title">Website Administrating</h5>
      <p className="card-text">Administrating existing websites and optimizing them, adding Google Ads campaings or adding products.</p>
      </div>
      </div>
  </div>
  <div class="col">
  <div className="card text-white bg-success border-light h-100">
  <img src={videoedit} alt="videoedit" />
    <div className="card-body">
      <h5 className="card-title">Video Editing</h5>
      <p className="card-text">Creating videos from Your footage, audio mixing and formatting for YouTube, Instagram/Facebook Story etc.</p>
    </div>
    </div>
  </div>
</div>
</Parallax>

    </div>
</div>

    )
}

export default Services;