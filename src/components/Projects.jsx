import React from "react";
import styled from "styled-components";
import CategorieBtn from "./CategorieBtn";
import Project from "./Project";
import { projects } from "../assets/data/projects";

const H1 = styled.h1`
  font-weight: 500;
  display: inline-block;
  color: rgba(245, 254, 251, 0.9);
`;

const Div = styled.div`
  margin-top: 120px;
  padding: 0 80px;

  @media (max-width: 768px) {
    padding: 0 20px;
    margin-top: 40px;
  }
`;

function Projects() {
  const [selected, setSelected] = React.useState(["Design", "Web", "Mobile"]);

  const toggleCategory = (category) => {
    console.log(category);
    console.log(selected);
    setSelected((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
    console.log(selected);
  };

  const filteredProjects = projects
    .slice()
    .reverse()
    .filter((project) => project.type.some((t) => selected.includes(t)));

  return (
    <Div>
      <H1>Projects</H1>
      <div
        style={{
          width: "fit-content",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "40px 0px",
          gap: 8,
        }}
      >
        {[
          { label: "Design", key: "Design" },
          { label: "Web Apps", key: "Web" },
          { label: "Mobile Apps", key: "Mobile" },
        ].map(({ label, key }) => (
          <CategorieBtn
            key={key}
            text={label}
            selected={selected.includes(key)}
            handleClick={() => toggleCategory(key)}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 80,
          marginBottom: 80,
        }}
      >
        {filteredProjects.map((element) => (
          <Project
            key={element.id}
            id={element.id}
            to={element.to}
            image={element.image}
            name={element.name}
            type={element.type.join(", ")}
            github={element.github}
            figma={element.figma}
          />
        ))}
      </div>
    </Div>
  );
}

export default Projects;
