import React from "react";
import styled, { keyframes } from "styled-components";
import icon from "../assets/images/icon.png";
import { Link } from "react-router-dom";
const Div = () => {
  // Styled Component for the div
  const SlideLeft = keyframes`
  from{
    transform : translateX(100%) translateY(20%);
    }to{
    transform : translateX(0%) translateY(0%);
    
    }
    `;
  const SlideRight = keyframes`
    from{
      transform : translateX(-100%) translateY(40%);
      
      }to{
        transform : translateX(0%) translateY(0%);
        
        }
        `;
  const SlideUp = keyframes`
        from{
          opacity: 0
          
          }to{          
          opacity: 1
            }
            `;
  const H1 = styled.h1`
    font-weight: 500;
    display: inline-block;
    color: rgba(245, 254, 251, 0.9);
    font-size: 4rem;
    transform: translateX(0%);
    animation: ${SlideLeft} 1s ease;
  `;
  const H2 = styled.h2`
    font-weight: 300;
    color: rgba(245, 254, 251, 0.7);
    font-size: 2rem;
    transform: translateX(0%);
    animation: ${SlideRight} 1s ease;
  `;
  const pulse = keyframes`
  0% {
    
  bottom :20px;
  }
  50% {
      bottom :25px;

      }
  100% {
    bottom :20px;
    
    }
    `;
  const Icon = styled.img`
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    bottom: 20px;
    width: 32px;
    animation: ${pulse} 1s infinite,
    ${SlideUp} 3s ease;
    opacity: 1;
  `;

  const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  `;
  const scrollDown = () => {
    window.scrollTo({
      top: window.scrollY + 720, // Scrolls down 100px from the current scroll position
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <Container>
      <H2>Hi there</H2>
      <H1>here is Hamida</H1>
      <H2>Web and mobile developer</H2>
      <Link
        style={{
          position: "absolute",
          bottom: 60,
        }}
        onClick={scrollDown}
      >
        <Icon src={icon} />
      </Link>
    </Container>
  );
};

export default Div;
