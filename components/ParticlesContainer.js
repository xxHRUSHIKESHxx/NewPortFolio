import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";

const ParticlesContainer = () => {
  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
    className="w-full h-full absolute translate-z-0"  
    id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover:{
              enable: true,
              mode: "repulse"
            },
            resize:true,
          },
          modes:{
            push:{
              quantity: 10
            },
            repulse:{
              distance: 100,
              duration : 0.4
            }
          }
        },
        particles:{
          color:{
            value:'#fff'
          },

          links:{
            color:'#05fa0d',
            distance: 100,
            enable:true,
            opacity: 0.5,
            width: 1.3
          },
          collisions :{
            enable:false
          },
          move:{
            direction:'none',
            enable:true,
            outModes:{
              default:'bounce'
            },
            random:true,
            speed:1,
            straight:false,
          },
        number:{
          density:{
            enable:true,
            area : 800
          },
          value:120
        },
        opacity:{
          value: 0.5,
        },
        shape:{
          type:'circle'
        },
        size:{
          value:{min:1 , max:3},
        },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
