import React from "react";
import styled, { keyframes } from "styled-components";
import { studycases } from "../assets/data/studcases";

const CaseStudy = ({ image, id }) => {

  const info = studycases.find(p => p.id === Number(id)).info
  console.log(
    info
  )

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
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      gap: 80px;
      margin: 120px 0px;
      animation: ${fadeIn} linear;
      animation-timeline: view();

      @media (max-width: 768px) {
      
      height: 200px;

      }
    `;
  const Img = styled.img`
      width: 100%;
      height: 100%;
      resize-mode: cover;
    `;
  const Content = styled.div`
      display: flex;
      align-items: baseline;
  
      gap: 80px;
      flex-direction: column;
      width: 100%;
      height: 80vh;
      animation: ${fadeIn} linear;
      animation-timeline: view();

      @media (max-width: 768px) {
      gap: 40px;
      height: fit-content;
      padding: 20px 0px;
      }
    `;
  const H1 = styled.h1`
      font-weight: 500;
      display: inline-block;
      color: rgba(245, 254, 251, 0.9);
      @media (max-width: 768px) {
      font-size: 1.8rem;
      
      }
    `;
  const P = styled.p`
    font-size:1.2rem;

    @media (max-width: 768px) {
    font-size: 1rem;
    }
    `;
  const Ul = styled.ul`
    font-size:1.2rem
  `
  const Ll = styled.li`
    font-size:1.2rem
  `

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
  const Btn = styled.a`
  
  width: 200px;
  padding: 8px 12px; /* Button padding */
  font-size: 1.6rem; /* Font size */
  color: white; /* Text color */
  border: none; /* Remove default border */
  border-radius: 16px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  display: flex;
   /* Make the button a block element */
   align-items: center; /* Center the content vertically */
    justify-content: center; /* Center the content horizontally */
    text-decoration: none; /* Remove underline */
  background: linear-gradient(
    270deg,
    #054df5,
    #04030b
  ); /* Initial gradient */
  background-size: 180% 180%; /* Larger background for smooth animation */
  animation: ${gradientAnimation} 5s ease infinite; /* Apply animation */
  transition: transform 0.3s ease; /* Smooth transform transition */
  font-size: 1.8 rem;
  height:60px;

  @media (max-width: 768px) {
    width: 150px;
    padding: 8px 12px; /* Button padding */
    font-size: 1.2rem; /* Font size */
    height: 40px;
  }
  &:hover {
    transform: scale(1.05); /* Slightly scale up on hover */
  }
  box-shadow: 1px 1px 4px #054df5;

  &:active {
    transform: scale(0.95); /* Slightly scale down when clicked */
  }
`;
const Container = styled.div`
padding: 120px;

@media (max-width: 768px) {
padding: 20px;
padding-top: 60px;
}
`

  return (
    <Container>
      <Content>
      
        <H1>{info.title}</H1>
        <P>{info.overview}</P>
        {info.link && <Btn href={info.link}>Live Demo</Btn>}
      </Content>

      <Div>
        <Img src={image} alt="design" />
      </Div>
      <Content>
        <H1>Problem Solved</H1>
        <P>{info.problemStatement}</P>
      </Content>

      <Content>
        <H1>Objectives</H1>
        <Ul>
          {info.objectives.map((objective, index) => (
            <Ll key={index}>{objective}</Ll>
          ))}
        </Ul>
      </Content>

      <Content>
        <H1>Features</H1>
        <Ul>
          {Object.entries(info.features).map(([key, value], index) => (
            <Ll key={index}>
              <strong>{key}:</strong> {value}
            </Ll>
          ))}
        </Ul>
      </Content>




      <Content>
        <H1>Implementation</H1>
        <Ul>
          {info.technologiesUsed.map((tech, index) => (
            <Ll key={index}>{tech}</Ll>
          ))}
        </Ul>
      </Content>

      <Content>
        <H1>Challenges</H1>
        <Ul>
          {info.challenges.map((challenge, index) => (
            <Ll key={index}>{challenge}</Ll>
          ))}
        </Ul>
      </Content>

      <Content>
        <H1>Outcome</H1>
        <P>{info.outcome}</P>
      </Content>


    </Container>
  );
};

export default CaseStudy;
