import React from "react";
import Social from "../components/Social";
import styled, { keyframes } from "styled-components";
import Button from "../components/Button";

function Contact() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/assets/docs/CV_hamida_DADDA.pdf`;
    link.download = "CV_hamida_DADDA.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const handleMail = () => {
    const email = "hamida2004dadda@gmail.com";

    // Construct the mailto URL
    const mailtoUrl = `mailto:${email}`;

    // Open the mailto link
    window.location.href = mailtoUrl;
  };
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
    max-width: fit-content;
    transform: translateX(0%);
    animation: ${SlideRight} 1s ease;
    @media (max-width: 768px) {
      font-size: 1.2rem;
      width: 100%;
    }
  `;

  const Div = styled.div`
  font-weight: 300;
  color: rgba(245, 254, 251, 0.7);
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  
    
    transform: translateX(0%);
    animation: ${SlideLeft} 1s ease;
    @media (max-width: 768px) {
      width: 100%;
      height: 100px;
      gap: 20px;
    }
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
    @media (max-width: 768px) {
      padding: 20px;
      padding-top: 40px;
    }
  `;
  const Content = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
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
        <Div
          style={{
            maxWidth: "90%",
            flexWrap: "wrap",
          }}
        >
          <Button
            text={"Download CV"}
            style={{
              color: "#054df5",
              background: "#f5fefb",
              
            }}
            onclick={handleDownload}
          />
          <Button
            text={"Contact"}
            style={{
            }}
            onclick={handleMail}
          />
        </Div>
      </Content>
      <Social />
    </Container>
  );
}

export default Contact;
