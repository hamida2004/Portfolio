import React from "react";
import styled, { keyframes } from "styled-components";

const Rect = ({ width, height, top, right }) => {
  const fadeIn = keyframes`
from{
scale: 0.9;
opacity:0;
}
to{
scale: 1;
opacity:1;}
`;
  const Div = styled.div`
    width: ${width};
    height: ${height};
    display: flex;
    z-index:-1;
    position:absolute;
    top:${top};
    right:${right};
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
    animation:${fadeIn} 1s ease;
    cursor: pointer;
  `;
  return <Div />;
};

export default Rect;
