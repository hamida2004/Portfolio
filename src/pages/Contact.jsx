import React from "react";
import Social from "../components/Social";
import styled, { keyframes } from "styled-components";
import Button from "../components/Button";

function Contact() {
  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = process.env.PUBLIC_URL + "/assets/your-document.pdf"; // Path to your PDF in the public folder
  //   // You can specify a custom download name
  //   link.click();
  // };
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
  const H1 = styled.h1`
    font-weight: 500;
    display: inline-block;
    color: rgba(245, 254, 251, 0.9);

    transform: translateX(0%);
    animation: ${SlideRight} 1s ease;
  `;
  const H2 = styled.h2`
    font-weight: 300;
    color: rgba(245, 254, 251, 0.7);
    width: 60%;
    
    
    transform: translateX(0%);
    animation: ${SlideRight} 1s ease;
  `;

  const Div = styled.div`
  font-weight: 300;
  color: rgba(245, 254, 251, 0.7);
  width: 40%,
  height:400px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  
    
    transform: translateX(0%);
    animation: ${SlideLeft} 1s ease;
`;
  const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    gap: 40px;
    padding: 80px;
    margin-top: 120px;
  `;
  const Content = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  return (
    <Container>
      <H1>Get In Touch</H1>
      <Content>
        <H2>
          Looking for reliable web or mobile development solutions? Let’s work
          together to bring your ideas to life with high-quality, tailored
          services.
        </H2>
        <Div>
          <Button
            text={"Download CV"}
            style={{
              color: "#054df5",
              background: "#f5fefb",
              fontSize: 20,
            }}
          />
          <Button
            text={"Contact"}
            style={{
              fontSize: 20,
            }}
          />
        </Div>
      </Content>
      <Social />
    </Container>
  );
}

export default Contact;
