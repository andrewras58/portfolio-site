"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import { useEffect, useState } from "react";

const StarryBackground = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{ preset: "stars", fullScreen: { enable: true, zIndex: -1 } }}
    />
  );
};

export default StarryBackground;
