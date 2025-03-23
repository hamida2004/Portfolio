import React from "react";
import styled, { keyframes } from "styled-components";

function Button({ text, handleClick, style }) {
  const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
  const GradientButton = styled.button`
width: 200px;
padding: 8px 12px; /* Button padding */
font-size: 1.4rem; /* Font size */
color: white; /* Text color */
border: none; /* Remove default border */
border-radius: 16px; /* Rounded corners */
cursor: pointer; /* Pointer cursor on hover */
background: linear-gradient(
  270deg,
  #054df5,
  #04030b
); /* Initial gradient */
background-size: 180% 180%; /* Larger background for smooth animation */
animation: ${gradientAnimation} 5s ease infinite; /* Apply animation */
transition: transform 0.3s ease; /* Smooth transform transition */
font-size: 1.8 rem;
&:hover {
  transform: scale(1.05); /* Slightly scale up on hover */
}
box-shadow: 1px 1px 4px #054df5;

&:active {
  transform: scale(0.95); /* Slightly scale down when clicked */
}

@media (max-width: 768px) {
width: 45%;
font-size: 1.2rem;
padding: 8px 12px;
}
`;
  return <GradientButton
    style={style}
    onClick={handleClick}>{text}</GradientButton>;
}

export default Button;
