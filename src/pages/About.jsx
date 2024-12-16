import { FaReact, FaJs,FaCss3,FaHtml5,FaGithub,FaFigma ,FaNodeJs} from "react-icons/fa";

import React from "react";
import styled, { keyframes } from "styled-components";
import Rect from "../components/Rect";
function About() {
  const H1 = styled.h1`
    font-weight: 500;
    display: inline-block;
    color: rgba(245, 254, 251, 0.9);
    margin-bottom: 20px;
  `;

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
      border-color: transparent #2b6afc transparent transparent;
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
      border-color: transparent transparent transparent #2b6afc;
    }
  `;
  const H2 = styled.h2`
    font-weight: 300;
    color: rgba(245, 254, 251, 0.7);
    margin-bottom: 40px;
  `;
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
    gap: 40px;
    width: 60%;
    min-width: 240px;
    min-height: 30vh;
    flex-wrap: wrap;
    transform: translateX(0%) translateY(0%);
    animation: ${SlideLeft} 1s ease;
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
    height: 100vh;
    padding: 120px 80px;
    display: flex;
    justify-content: start;
    gap: 40px;
    flex-wrap: wrap;
    position: relative;
  `;
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
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "80vh",
          }}
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
            <div
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <h2>higher Cycle ESI-SBA</h2>
              <h3>2023-Now</h3>
            </div>
            <H2>higher school in computer science Sidi Bel Abess</H2>
          </EduLeft>
          <div
            style={{
              height: "100%",
            }}
          >
            <div
              style={{
                backgroundColor: "#2b6afc",
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
            <div
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <h2>Preparatory Cycle ESI-SBA</h2>
              <h3> 2021-2023</h3>
            </div>
            <H2>higher school in computer science Sidi Bel Abess</H2>
          </EduRight>
        </div>
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
            width:'100%'
          }}
        >
          <FaJs size={60}  color="yellow"    style={{
            margin:40,
            cursor:"pointer"
          }}/>
          <FaReact size={60}  color="#2b6afc"  style={{
            margin:40,
            cursor:"pointer"
          }}/>
          <FaNodeJs size={60}  color="green"  style={{
            margin:40,
            cursor:"pointer"
          }}/>
          <FaGithub size={60}  color="grey"  style={{
            margin:40,
            cursor:"pointer"
          }}/>
          <FaFigma size={60}  color="purple"  style={{
            margin:40,
            cursor:"pointer"
          }}/>
          <FaCss3 size={60}  color="blue"  style={{
            margin:40,
            cursor:"pointer"
          }}/>
          <FaHtml5 size={60}  color="orange"  style={{
            margin:40,
            cursor:"pointer"
          }}/>
        </div>
      </DivLeft>

      <Rect width={"200px"} height={"180px"} top={"80px"} right={"80px"} />
      <Rect width={"200px"} height={"180px"} top={"160px"} right={"160px"} />
    </Container>
  );
}

export default About;
