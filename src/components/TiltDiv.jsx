import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const TiltDiv = ({ height, width, children, animation }) => {
  const [tiltStyle, setTiltStyle] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    // Calculate rotation based on mouse position within the div
    const xRotation = (offsetY / offsetHeight - 0.5) * 30; // Max 30 degrees rotation on X-axis
    const yRotation = (offsetX / offsetWidth - 0.5) * -30; // Max 30 degrees rotation on Y-axis

    setTiltStyle({
      rotateX: xRotation,
      rotateY: yRotation,
    });
  };
  const fadeIn = keyframes`
from{
scale: 0.9;
opacity:0;
}
to{
scale: 1;
opacity:1;}
`;
  const handleMouseLeave = () => {
    // Reset tilt effect when the mouse leaves the div
    setTiltStyle({ rotateX: 0, rotateY: 0 });
  };
  const Div = styled.div`
    width: ${width};
    height: ${height};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    font-size: 20px;
    color: white;
    border-radius: 10px;
    transition: transform 0.3s ease-out;
    perspective: 1000px;
    box-shadow: 1px 1px 10px rgba(43, 106, 252, 0.3);
    background: linear-gradient(135deg, #04030b, rgba(43, 106, 252, 0.1));
    border-radius: 15px;
    backdrop-filter: blur(10px);
    color: #fff;
    text-align: center;
    animation: ${animation && fadeIn} linear;
    animation-timeline: view();
    cursor: pointer;

  `;

  return (
    <Div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${tiltStyle.rotateX}deg) rotateY(${tiltStyle.rotateY}deg)`,
      }}
    >
      {children}
    </Div>
  );
};

export default TiltDiv;
