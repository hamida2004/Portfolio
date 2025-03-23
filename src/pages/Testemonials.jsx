import React from "react";
import styled, { keyframes } from "styled-components";
import Testemonial from "../components/Testemonial";
import { testemonials } from "../assets/data/testimonials";

const Testemonials = () => {
  const SlideRight = keyframes`
  from{
  transform : translateX(-100%);

  }to{
  transform : translateX(0%);

  }`;
  const H1 = styled.h1`
    font-weight: 500;
    color: rgba(245, 254, 251, 0.9);
    margin: 60px 0px;
    transform: translateX(0%);
    animation: ${SlideRight} 1s ease;
    @media (max-width: 768px) {
      margin: 40px 0px;
    }
  `;
  return (
    <div
      style={{
        margin: "120px 0px ",
        padding: "0px 80px",
        width: "100%",
        height: "100vh",
      }}
    >
      <H1>Testemonials</H1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 80,
        }}
      >
        {testemonials.map((ele, index) => {
          return (
            <Testemonial
              name={ele.name}
              content={ele.content}
              image={ele.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Testemonials;
