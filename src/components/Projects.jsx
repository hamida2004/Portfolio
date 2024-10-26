import React from 'react'
import Nav from '../components/Nav'
import styled from 'styled-components';
import CategorieBtn from './CategorieBtn';
import Project from './Project';

function Projects() {
  const H1 = styled.h1`
    font-weight: 500;
    display: inline-block;
    color: rgba(245, 254, 251, 0.9);

  `;
  return (
    <div
    style={{
      marginTop:120,
      padding:'0px 80px'
    }}
    >
    <Nav/>
    <H1>Projects</H1>
    <div
    style={{
      width:'25%',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      margin:'40px 0px'

    }}
    >
      <CategorieBtn text={'Design'} />
      <CategorieBtn text={'Web Apps'}/>
      <CategorieBtn text={'Mobile Apps'}/>
    </div>
    <div
    style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
     flexWrap:'wrap',
     gap:80
    }}
    >
<Project />
<Project />
<Project />
<Project />
<Project />
<Project />
<Project />
    </div>
    </div>
  )
}

export default Projects
