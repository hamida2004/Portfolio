import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const NavBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 60px;
  position: fixed;
  z-index: 2;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.7); /* Add some background for clarity */
`;

const Image = styled.img`
  height: 20px;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 3;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;

const A = styled(Link)`
  text-decoration: none;
  color: #f5fefb;
  padding: 4px 8px;

  &:hover{
    color: rgb(43, 106, 252);
    transform: scale(1.1, 1);
  }
`;

const ScrollButton = styled.button`
  background: none;
  border: none;
  color: #f5fefb;
  cursor: pointer;
  font-size: inherit;
  padding: 4px 8px;
  text-decoration: none;

  &:hover {
    color: rgb(43, 106, 252) ;
    transform: scale(1.1, 1);
  }
`;

function Nav() {
  const navigate = useNavigate();

  // Scrolls down after navigation to the homepage
  const scrollDown = () => {
    navigate('/'); // First navigate to the home route

    // Then scroll down after navigation
    setTimeout(() => {
      window.scrollTo({
        top: window.scrollY + window.innerHeight + 40, // Scrolls down 2000px from the current scroll position
        behavior: "smooth", // Smooth scrolling
      });
    }, 100); // Wait for the navigation to happen first
  };

  return (
    <NavBar>
      <Link to="/">
        <Image src={logo} alt="logo" />
      </Link>
      <Ul>
        <A to="/">Home</A>
        <ScrollButton onClick={scrollDown}>Projects</ScrollButton>
        <A to="/about">About</A>

        {/* Using a button for the scroll action */}
       
        <A to="/testemonials">Testemonials</A>
        <A to="/contact">Contact</A>
      </Ul>
    </NavBar>
  );
}

export default Nav;
