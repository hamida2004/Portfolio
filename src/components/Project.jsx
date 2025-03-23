import React from "react";
import TiltDiv from "../components/TiltDiv";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Project({id, to, image, name, type }) {
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
    width: 80%;
  `;
  const isExternal = to.startsWith("http");
  const RLink = isExternal ? styled.a`` : styled(Link)``;
  const StyledLink = styled(RLink)`
    text-decoration: none;
    display: flex;
    align-items: center;
   justify-content: center;
   gap: 20px;
  `;
  const H1 = styled.h1`
    font-weight: 500;
    display: inline-block;
    color: rgba(245, 254, 251, 0.9);
    font-size: 24px;
  `;
  const H2 = styled.h2`
    font-weight: 300;
    color: #2b6afc;
    font-size: 20px;
  `;

  return (
    <StyledLink to={to} href={to} id={id}>
      <TiltDiv height={"520px"} width={"440px"} animation={true}>
        <Top>
          <Img src={image} />
        </Top>
        <Bottom>
          <H1>{name}</H1>
          <H2>{type}</H2>
        </Bottom>
      </TiltDiv>
    </StyledLink>
  );
}

export default Project;
