import React from "react";
import Div from "../components/Div";
import styled from "styled-components";
import Projects from "../components/Projects";
const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 32px;
`;
function Home() {
  return (
    <>
      <Main>
        <Div height={"84vh"} width={"84%"} />
      </Main>
      <Projects />
    </>
  );
}

export default Home;
