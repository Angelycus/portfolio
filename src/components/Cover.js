import React from 'react';
import Typed from 'react-typed';
import nino from '../nobg-pic.png';
import Parallax from 'react-rellax';

const Cover = () => {
    return (
<div className="header-wraper">
<div className="main-info">
<Parallax speed={ 0 }><h1>Nikola Kovačević</h1>
<Typed
    className="typed-text"
    strings={["Digital", "Digital Creations", "Digital Creations 4 U"]}
    typeSpeed={40}
    loop
/>
</Parallax>
</div>

<div className="coverImg d-none d-lg-block">
<Parallax speed={ -10 }>
<img src={nino} alt="nino" className="nino" />
</Parallax>
</div>

</div>

    )
}

export default Cover;