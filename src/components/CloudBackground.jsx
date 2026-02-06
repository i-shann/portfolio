import React, { useState, useEffect } from "react";

export const CloudBackground = () => {
  const [clouds, setClouds] = useState([]);

 
  const generateClouds = () => {
    const count = Math.max(3, Math.floor((window.innerWidth * window.innerHeight) / 100000));
    const newClouds = [];

    for (let i = 0; i < count; i++) {
      newClouds.push({
        id: i,
        left: Math.random() * 90 + 5, 
        top: Math.random() * 80 + 5,   
        width: Math.random() * 50 + 50, 
        opacity: Math.random() * 0.5 + 0.4, 
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${Math.random() * 15 + 15}s`,
      });
    }

    setClouds(newClouds);
  };

  useEffect(() => {
    generateClouds();
    window.addEventListener("resize", generateClouds);

    return () => {
      window.removeEventListener("resize", generateClouds);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {clouds.map(({ id, left, top, width, opacity, animationDelay, animationDuration }) => (
        <div
          key={id}
          className="cloud animate-float"
          style={{
            position: "absolute",
            left: `${left}%`,
            top: `${top}%`,
            width: `${width}px`,
            height: `${width * 0.6}px`,
            opacity,
            animationDelay,
            animationDuration,
            background: "rgba(0, 123, 255, 0.6)",  
            borderRadius: "50%",
            filter: "blur(8px)",
          }}
        />
      ))}
    </div>
  );
};
