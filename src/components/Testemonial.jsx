import React from "react";
import styled, { keyframes } from "styled-components";

const Testemonial = () => {
  
  const SlideUp = keyframes`
  from{
  transform : translateY(40%);

  }to{
  transform : translateY(0%);

  }`
  const Container = styled.div`
    height: 30%;
    width: 40vh;
    border-radius: 10px;
    background: linear-gradient(135deg, #04030b, rgba(43, 106, 252, 0.1));
    box-shadow: 1px 1px 10px rgba(43, 106, 252, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    transform: translateY(0%);
    animation: ${SlideUp} 1s ease;
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
    margin: 20px 0px;
    gap:20px
  `;
  return (
    <Container>
      <Crediantials>
        <Img />
        <Name>John Doe</Name>
      </Crediantials>
      <p
      style={{
        padding:10
      }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias et
        atque doloribus neque, in porro ea culpa, provident dolore eaque aperiam
        ipsa quas tempore, fugit consectetur! Incidunt placeat veniam quia!
      </p>
    </Container>
  );
};

export default Testemonial;
