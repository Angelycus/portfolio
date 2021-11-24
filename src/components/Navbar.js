import React from 'react';
import logo from '../logo.svg';
import logo2 from '../logo1-nobg.png';
import logo3 from '../logo2-nobg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faIcons, faTools, faPhotoVideo, faIdCard, faHamburger } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-xl navbar-custom">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src={logo2} className="App-logo2" alt="logo2" /><img src={logo3} className="App-logo2" alt="logo2" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-right" aria-controls="navbar-right" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faHamburger} color="white" size="2x" />
    </button>
    <div className="collapse navbar-collapse" id="navbar-right">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="mailto: nick_kova@yahoo.com">nick_kova@yahoo.com</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#coverId">Home  <FontAwesomeIcon icon={faHome} size="2x" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skillsId">Skills <FontAwesomeIcon icon={faIcons}  size="2x" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servicesId">Services <FontAwesomeIcon icon={faTools} size="2x"  /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projectsId">Projects <FontAwesomeIcon icon={faPhotoVideo} size="2x" /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutId">About <FontAwesomeIcon icon={faIdCard} size="2x" /></a>
              </li>
            <div className="App-header">
            Created in React.js<img src={logo} className="App-logo" alt="logo" />
              </div>
          </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar