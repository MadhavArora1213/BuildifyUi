import React, { useEffect, useRef } from "react";
import "./PortolButton.css";

const PortalButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseMove = (e) => {
      const stream = document.createElement("div");
      stream.className = "energy-stream";

      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;

      stream.style.left = `${x}px`;
      stream.style.animation = "streamFlow 1s linear forwards";

      button.appendChild(stream);

      setTimeout(() => stream.remove(), 1000);
    };

    const addRandomShapes = () => {
      if (button.matches(":hover")) {
        const shape = document.createElement("div");
        shape.className = "shape";
        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;
        shape.style.transform = `rotate(${Math.random() * 360}deg)`;

        button.appendChild(shape);

        setTimeout(() => shape.remove(), 1000);
      }
    };

    button.addEventListener("mousemove", handleMouseMove);
    const shapeInterval = setInterval(addRandomShapes, 200);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      clearInterval(shapeInterval);
    };
  }, []);

  return (
    <button ref={buttonRef} className="portal-button">
      <div className="dimension-layer"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="text-container">DIMENSION</div>
    </button>
  );
};

export default PortalButton;
