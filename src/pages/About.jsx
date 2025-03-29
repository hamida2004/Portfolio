
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaReact, FaNodeJs ,FaFigma} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import React from "react";
import styled, { keyframes } from "styled-components";
import Rect from "../components/Rect";
function About() {
  const H1 = styled.h1`
    font-weight: 500;
    display: inline-block;
    color: rgba(245, 254, 251, 0.9);
    margin: 40px 0px;
  `;
  const iconStyle = { color: "rgb(43, 106, 252)", fontSize: 40 };

  const EduLeft = styled.div`
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 8px;
      right: -40px;
      transform-origin: center;
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 10px 20px 10px 0;
      border-color: transparent #CBA135 transparent transparent;
    }
  `;
  const EduRight = styled.div`
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 8px;
      left: -40px;
      transform-origin: center;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 0 10px 20px;
      border-color: transparent transparent transparent #CBA135;
    }
  `;
  const H2 = styled.h2`
    font-weight: 300;
    color: rgba(245, 254, 251, 0.7);
    
    @media (max-width: 768px) {
      margin-bottom: 20px;
      width: 100%;
      font-size: 1.2rem;
    }

  
  `;
  const Cycle = styled.h2`
  @media (max-width: 768px) {
  font-size: 1.2rem;
  }
  `
  const Year = styled.h2`
  font-weight: 300;
  @media (max-width: 768px) {
  font-size: 1rem;
  }
  `
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
  const DivLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    gap: 20px;
    width: 60%;
    min-width: 240px;
    min-height: 30vh;
    flex-wrap: wrap;
    transform: translateX(0%) translateY(0%);
    animation: ${SlideLeft} 1s ease;
    @media (max-width: 768px) {
      width: 100%;}
  `;
  const DivRight = styled.div`
    width: 40%;
    min-width: 240px;
    display: flex;
    justify-content: center;
    gap: 20px;
    min-height: 30vh;
    flex-wrap: wrap;
    transform: translateX(0%) translateY(0%);
    animation: ${SlideRight} 1s ease;
  `;
  const Container = styled.div`
    width: 100%;
    padding: 120px 80px;
    display: flex;
    justify-content: start;
    flex-direction: column;
    gap: 40px;
    position: relative;
    @media (max-width: 768px) {
      padding: 40px;
      padding-top: 60px;
      justify-content: center;
  `;
  const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: baseline;
    }
  `;
  const DIV = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    width: 100%;
    height: 80vh;
  @media (max-width: 768px) {
  height: 40vh;
  }
  `
  return (
    <Container>
      <DivLeft>
        <H1>About</H1>
        <H2>
          I am an IT engineering student, UI/UX designer, and full-stack mobile
          and web developer with over 3 years of hands-on experience in coding.
        </H2>
        <H2>
          I am passionate about problem-solving, creativity, and delivering
          innovative solutions.
        </H2>
      </DivLeft>
      <DivRight
        style={{
          marginTop: 120,
          width: "100%",
          justifyContent: "start",
        }}
      >
        <H1>Education</H1>
        <DIV
        
        >
          <EduLeft
            style={{
              display: "flex",
              flexDirection: "column",
              width: "45%",
              alignSelf: "baseline",
              gap: 20,
            }}
          >
            <Div
            
            >
              <Cycle>higher Cycle ESI-SBA</Cycle>
              <Year>2023-Now</Year>
            </Div>
            <H2>higher school in computer science Sidi Bel Abess</H2>
          </EduLeft>
          <div
            style={{
              height: "100%",
            }}
          >
            <div
              style={{
                backgroundColor: "#CBA135",
                width: 4,
                height: "100%",
                borderRadius: 2,
                marginRight: 40,
                marginLeft: 40,
              }}
            ></div>
          </div>
          <EduRight
            style={{
              display: "flex",
              flexDirection: "column",
              width: "45%",
              alignSelf: "end",
            }}
          >
            <Div
              
            >
              <Cycle>Preparatory Cycle ESI-SBA</Cycle>
              <Year> 2021-2023</Year>
            </Div>
            <H2>higher school in computer science Sidi Bel Abess</H2>
          </EduRight>
        </DIV>
      </DivRight>
      <DivLeft
      style={{
        width:'100%'
      }}
      >
        <H1
        style={{
          marginTop:120
        }}
        >Technologies </H1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            width:'100%',
            gap: 40,
          }}
        >
                   <FaHtml5 style={iconStyle} />
                   <FaCss3Alt style={iconStyle} />
                   <FaJs style={iconStyle} />
                   <FaGitAlt style={iconStyle} />
                   <FaReact style={iconStyle} />
                   <FaNodeJs style={iconStyle} />
                   <SiExpress style={iconStyle} />
                   <SiMongodb style={iconStyle} />
                   <SiMysql style={iconStyle} />
                   <BiLogoSpringBoot  style={iconStyle}/>
                   <FaJava  style={iconStyle} />
                   <TbBrandReactNative  style={iconStyle}/>
                   <FaFigma style={iconStyle} />
         
        </div>
      </DivLeft>

      <Rect width={"200px"} height={"180px"} top={"80px"} right={"80px"} />
      <Rect width={"200px"} height={"180px"} top={"160px"} right={"160px"} />
    </Container>
  );
}

export default About;
