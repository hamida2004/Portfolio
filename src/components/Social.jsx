import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

function Social() {

  const SlideRight = keyframes`
    from{
    transform : translateX(-100%) translateY(40%);

    }to{
    transform : translateX(0%) translateY(0%);
  
    }
    `;
  const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 25%;
    gap:16px;
    margin: 40px 0px;
    transform: translateX(0%);
    animation: ${SlideRight} 1s ease;
  `;
  const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  `;
  return (
    <Div>
      <StyledLink target="_blank">
        <FaFacebook size={32} color="#054df5"/>
      </StyledLink>
      <StyledLink target="_blank" to={'https://www.instagram.com/devaddict2024/#'}>
        <FaInstagram size={32} color="#054df5"/>
      </StyledLink>
      <StyledLink target="_blank" to={"https://x.com/Addict2000Dev"}>
        <FaTwitter size={32} color="#054df5"/>
      </StyledLink>

      <StyledLink target="_blank" to={'https://www.tiktok.com/@dev2000addict'}>
        <FaTiktok size={32} color="#054df5"/>
      </StyledLink>
    </Div>
  );
}

export default Social;
