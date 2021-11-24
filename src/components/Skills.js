import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faReact, faWordpress, faGoogle } from '@fortawesome/free-brands-svg-icons'; 
import Parallax from 'react-rellax';
import tilda from '../tilda-logo.png';
import adobe from '../Pr-logo.png';

const Skills = () => {
  return (
<div className="skills-table">
<div>
<Parallax speed={ 0 }>
  <h2>SKILLS</h2>
  </Parallax>
  <ul className="list-group">
  <li className="list-group-item list-group-item-success"><FontAwesomeIcon icon={faHtml5} size="2x" /> HTML 5</li>
  <li className="list-group-item list-group-item-success"><FontAwesomeIcon icon={faCss3Alt} size="2x" /> CSS 3</li>
  <li className="list-group-item list-group-item-success"><FontAwesomeIcon icon={faJsSquare} size="2x" /> JavaScript</li>
  <li className="list-group-item list-group-item-success"><FontAwesomeIcon icon={faBootstrap} size="2x"  /> Bootstrap 5</li>
  <li className="list-group-item list-group-item-success"><FontAwesomeIcon icon={faReact} size="2x"  /> React.js</li>
  <li className="list-group-item list-group-item-success"><FontAwesomeIcon icon={faWordpress} size="2x"  /> WordPress</li>
  <li className="list-group-item list-group-item-success"><FontAwesomeIcon icon={faGoogle} size="2x"  /> Google Ads</li>
  <li className="list-group-item list-group-item-success"><img src={tilda} alt="tilda" className="logopic" /> Tilda</li>
  <li className="list-group-item list-group-item-success"><img src={adobe} alt="adobe" className="logopic" /> Adobe Premiere Pro</li>
</ul>
</div>
</div>

    )
}

export default Skills;