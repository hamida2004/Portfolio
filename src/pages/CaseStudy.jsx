import React from "react";
import styled, { keyframes } from "styled-components";

const CaseStudy = ({ image }) => {
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
  `;
  const Img = styled.img`
    width: 100%;
  `;
  const Content = styled.div`
    padding: 120px;
    display: flex;
    align-items: baseline;

    gap: 80px;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    animation: ${fadeIn} linear;
    animation-timeline: view();
  `;
  const H1 = styled.h1`
    font-weight: 500;
    display: inline-block;
    color: rgba(245, 254, 251, 0.9);
  `;
  const P = styled.p``;
  return (
    <>
      <Content>
        <H1>Breif :</H1>
      </Content>
      <Content>
        <H1>Problem solved</H1>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum rem
          excepturi sint est vitae saepe perferendis iusto. Labore officiis
          aliquam sint reiciendis, placeat dignissimos iste ipsam, ducimus
          dolorem, quia vel.
        </P>
      </Content>
      <Content>
        <H1>Features</H1>
      </Content>
      <Div>
        <Img src={image} alt="bubbles design" />
      </Div>
      <Content>
        <H1>Design</H1>
      </Content>
      <Content>
        <H1>Implementation</H1>
      </Content>
      <Content>
        <H1>Users' reviews :</H1>
      </Content>
    </>
  );
};

export default CaseStudy;
