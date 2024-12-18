import React from "react";
import styled, { keyframes } from "styled-components";
import { IoChevronDownOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Rect from "./Rect";
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
    font-size: 3.2rem;
    transform: translateX(0%);
    animation: ${SlideLeft} 1s ease;
  `;
  const H2 = styled.h2`
    font-weight: 300;
    color: rgba(245, 254, 251, 0.7);
    font-size: 1.8rem;
    transform: translateX(0%);
    animation: ${SlideRight} 1s ease;
  `;
  const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

  const Icon = styled(IoChevronDownOutline)`
    margin-right: auto;
    margin-left: auto;
    width: 32px;
    transform: scale(1);
    opacity: 1;
    animation: ${pulse} 1s infinite, ${SlideUp} 3s ease;
    opacity: 1;
  `;

  const Container = styled.div`
    width: 100%;
    padding: 80px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: baseline;
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
    <>
      <Rect width={"200px"} height={"180px"} top={"40px"} right={"80px"} />
      <Rect width={"200px"} height={"180px"} top={"120px"} right={"160px"} />
      <Container>
        <H2>Hi there</H2>
        <H1>here is Hamida</H1>
        <h2
          style={{
            color: "#2b6afc",
            fontWeight: 400,
          }}
        >
          Full-stack developer | Problem-solver | UI/UX Enthusiast
        </h2>
        <H2
        style={{
          width:'60%'
        }}
        >
          web and mobile developer who loves turning ideas into functional,
          user-friendly apps and designs.
        </H2>
        <Link
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            flexDirection: "column",
            marginTop:80
          }}
          onClick={scrollDown}
        >
          <p
            style={{
              color: "#2b6afc",
            }}
          >
            let's collaborate
          </p>
          {/* <IoChevronDownOutline size={40} color="rgba(43, 106, 252, 0.3)" /> */}
          <Icon size={40} color="#2b6afc" />
        </Link>
      </Container>
    </>
  );
};

export default Div;
