import React from "react";
import TiltDiv from "../components/TiltDiv";
import styled from "styled-components";
import image from "../assets/images/image.png";
function Project() {
  const Top = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Bottom = styled.div`
    width: 100%;
    height: 20%;
    text-align: center;
  `;
  const Img = styled.img`
    height: 80%;
    width: 80%;
  `;
  const H1 = styled.h1`
    font-weight: 500;
    display: inline-block;
    color: rgba(245, 254, 251, 0.9);
    font-size: 24px;
  `;
  const H2 = styled.h2`
    font-weight: 300;
    color:#2b6afc;
    font-size: 20px;
  `;
  return (
    <TiltDiv height={"520px"} width={"440px"} animation={true}>
      <Top>
        <Img src={image} />
      </Top>
      <Bottom>
        <H1>Safe home</H1>
        <H2>Design , Mobile</H2>
      </Bottom>
    </TiltDiv>
  );
}

export default Project;
