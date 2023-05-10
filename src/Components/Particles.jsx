import Particles from "react-tsparticles";
import { useLoad, loadFull } from 'tsparticles'
import React, { useCallback } from "react";


export default function Particle() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}

            options={{
                background: {
                    image: "url('')",
                },
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "#ffffff09",
                        opacity: 0
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        directions: "bottom",
                        enable: true,
                        random: true,
                        speed: 1.5,
                        straight: false,
                        bounce: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 8000,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.5, max: 5 },
                    },
                    gravity: {
                        enable: true,
                        maxSpeed: 1,
                    }
                },
                detectRetina: true,
            }}

        />
    );

}

