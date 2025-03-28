import React from "react";
import styled, { keyframes } from "styled-components";

const Testemonial = ({ name, content, image }) => {
  const SlideUp = keyframes`
  from{
  transform : translateY(40%);

  }to{
  transform : translateY(0%);

  }`;
  const Container = styled.div`
    height: 80vh;
    min-width: 240px;
    width: 30%;
    border-radius: 10px;
    background: linear-gradient(135deg, #04030b, rgba(43, 106, 252, 0.1));
    box-shadow: 1px 1px 10px #2b6afc;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px;
    transform: translateY(0%);
    animation: ${SlideUp} 1s ease;
    @media (max-width: 768px) {
      width: 90%;
      height: fit-content;
    }
  `;
  const Img = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 20px;
  `;
  const Name = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
  `;
  const Crediantials = styled.div`
    display: flex;
    align-items: center;
    justify-content: baseline;
    width: 100%;
    margin: 10px 0px 20px;
    gap: 20px;
  `;
  return (
    <Container>
      <Crediantials>
        <Img src={image} />
        <Name>{name}</Name>
      </Crediantials>
      <p
        style={{
          padding: 10,
        }}
      >
        {content}
      </p>
    </Container>
  );
};

export default Testemonial;
