import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import Home from "./RoutingPages/Home";
import Projects from "./RoutingPages/Projects";
import About from "./RoutingPages/About";
import Contact from "./RoutingPages/Contact";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const containerRef = useRef(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  const particlesLoaded = useCallback(
    (container) => {
      containerRef.current = container;
      window.particlesContainer = container;
    },
    [containerRef]
  );

  // const options = useMemo(
  //   () => ({
  //     fullScreen: {
  //       zIndex: -1,
  //     },
  //     particles: {
  //       number: {
  //         value: 150,
  //         // color: "red",
  //       },
  //       shape: {
  //         type: "triangle",
  //       },
  //       links: {
  //         enable: true,
  //       },
  //       move: {
  //         enable: true,
  //       },
  //     },





  //     // "fpsLimit": 120,
  //     // "fullScreen": {
  //     //   "enable": true,
  //     //   "zIndex": 0
  //     // },
  //     // "particles": {
  //     //   "number": {
  //     //     "value": 80,
  //     //     "density": {
  //     //       "enable": true
  //     //     }
  //     //   },
  //     //   "color": {
  //     //     "value": "#ff0000",
  //     //     "animation": {
  //     //       "enable": true,
  //     //       "speed": 20,
  //     //       "sync": true
  //     //     }
  //     //   },
  //     //   "shape": {
  //     //     "type": "triangle"
  //     //   },
  //     //   "opacity": {
  //     //     "value": 0.5,
  //     //     "random": false,
  //     //     "anim": {
  //     //       "enable": false,
  //     //       "speed": 3,
  //     //       "opacity_min": 0.1,
  //     //       "sync": false
  //     //     }
  //     //   },
  //     //   "size": {
  //     //     "value": 3,
  //     //     "random": true,
  //     //     "anim": {
  //     //       "enable": false,
  //     //       "speed": 20,
  //     //       "size_min": 0.1,
  //     //       "sync": false
  //     //     }
  //     //   },
  //     //   "links": {
  //     //     "enable": true,
  //     //     "distance": 100,
  //     //     "color": "#ffffff",
  //     //     "opacity": 0.5,
  //     //     "width": 2
  //     //   },
  //     //   "move": {
  //     //     "enable": true,
  //     //     "speed": 2,
  //     //     "direction": "none",
  //     //     "random": false,
  //     //     "straight": true,
  //     //     "out_mode": "out",
  //     //     "attract": {
  //     //       "enable": false,
  //     //       "rotateX": 600,
  //     //       "rotateY": 1200
  //     //     }
  //     //   }
  //     // },
  //     // "interactivity": {
  //     //   "events": {
  //     //     "onhover": {
  //     //       "enable": true,
  //     //       "mode": "repulse"
  //     //     },
  //     //     "onclick": {
  //     //       "enable": true,
  //     //       "mode": "push"
  //     //     },
  //     //     "resize": true
  //     //   },
  //     //   "modes": {
  //     //     "grab": {
  //     //       "distance": 400,
  //     //       "line_linked": {
  //     //         "opacity": 1
  //     //       }
  //     //     },
  //     //     "bubble": {
  //     //       "distance": 400,
  //     //       "size": 40,
  //     //       "duration": 2,
  //     //       "opacity": 0.8
  //     //     },
  //     //     "repulse": {
  //     //       "distance": 200
  //     //     },
  //     //     "push": {
  //     //       "particles_nb": 4
  //     //     },
  //     //     "remove": {
  //     //       "particles_nb": 2
  //     //     }
  //     //   }
  //     // },
  //     // "retina_detect": true,
  //   }),
  //   []
  // );




  const options = useMemo(() => {
    return {
      fpsLimit: 60,
      fullScreen: {
        zIndex: -1,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 120,
          enable: true,
          opacity: 0.8,
          width: 1,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 4 },
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },
        number: {
          value: 90,
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
          random: true,
        },
      },
      detectRetina: true,
      retina_detect: true,
    };
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}

      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;































