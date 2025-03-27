import React from "react";
import TiltDiv from "../components/TiltDiv";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
function Project({ id, to, image, name, type, github, figma }) {
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

  const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left:auto;
  padding: 20px;
  `

  const Icon = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0);
  border-radius: 8px;
  padding: 10px;
  border: 2px solid #2b6afc;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  `

  return (
    <StyledLink to={to} href={to} id={id}>
      <TiltDiv height={"520px"} width={"440px"} animation={true}>
        <Header>
          <Icon href={github} target="_blank">
            <FaGithub
              size={24}
              color="#2b6afc"
            />

          </Icon>
          <Icon href={figma} target="_blank">

            <FaFigma
              size={24}
              color="#2b6afc"
            />
          </Icon>

        </Header>
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
