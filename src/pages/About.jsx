import React from "react";
import Nav from "../components/Nav";
import styled, { keyframes } from "styled-components";

function About() {
  const H1 = styled.h1`
    font-weight: 500;
    display: inline-block;
    color: rgba(245, 254, 251, 0.9);
    margin-bottom: 20px;
  `;
  const H2 = styled.h2`
    font-weight: 300;
    color: rgba(245, 254, 251, 0.7);
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
    width: 40%;
    height: 30vh;
    transform: translateX(0%) translateY(0%);
    animation: ${SlideLeft} 1s ease;
  `;
  const DivRight = styled.div`
    width: 40%;
    height: 30vh;
    transform: translateX(0%) translateY(0%);
    animation: ${SlideRight} 1s ease;
  `;
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 120px 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  `;
  return (
    <Container>
      <Nav />
      <DivLeft>
        <H1>About</H1>
        <H2>
          I am an IT engineering student, UI/UX designer, and full-stack mobile
          and web developer with over 3 years of hands-on experience in coding.
        </H2>
      </DivLeft>
      <DivRight>
        <H1>Education</H1>
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
      </DivRight>
      <DivLeft>
        <H2>
          I am passionate about problem-solving, creativity, and delivering
          innovative solutions.
        </H2>
      </DivLeft>
      <DivRight>
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
      </DivRight>
    </Container>
  );
}

export default About;
