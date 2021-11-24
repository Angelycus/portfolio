import React from 'react';
import './App.css';
import Particles from "react-tsparticles";
import Navbar from './components/Navbar';
import Cover from './components/Cover';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  const particlesInit = (main) => {
    console.log(main);

  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  
  return (
<div className="App">
<Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#11a04c",
          },
          links: {
            color: "#11a04c",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "square",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
 
 <Navbar />
 

 <div id="coverId">
  <Cover />
</div>
<div id="skillsId">
  <Skills />
</div>
<div id="servicesId">
  <Services />
</div>
<div id="projectsId">
  <Projects />
</div>
<div id="aboutId">
  <About />
  
</div>
<Footer />
</div>

);
};

export default App;
