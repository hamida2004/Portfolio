import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

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
  background-color: rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Image = styled.img`
  height: 20px;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 3;

  @media (max-width: 768px) {
  position: static;}
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    height: calc(100vh - 60px);
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
  }
`;

const A = styled(Link)`
  text-decoration: none;
  color: #f5fefb;
  padding: 4px 8px;

  &:hover {
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
    color: rgb(43, 106, 252);
    transform: scale(1.1, 1);
  }
`;

function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollDown = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({
        top: window.scrollY + window.innerHeight + 40,
        behavior: "smooth",
      });
    }, 100);
  };

  // Update `isMobile` state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <NavBar>
      <Link to="/">
        <Image src={logo} alt="logo" />
      </Link>
      {isMobile && !isMenuOpen && (
        <BsList
          color="rgb(43, 106, 252)"
          size={40}
          style={{ cursor: "pointer" }}
          onClick={() => setIsMenuOpen(true)}
        />
      )}
      {isMobile && isMenuOpen && (
        <IoClose
          color="rgb(43, 106, 252)"
          size={40}
          style={{ cursor: "pointer" }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <Ul isMenuOpen={isMenuOpen}>
        <A to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </A>
        <ScrollButton onClick={() => {
          scrollDown();
          setIsMenuOpen(false);
        }}>
          Projects
        </ScrollButton>
        <A to="/testimonials" onClick={() => setIsMenuOpen(false)}>
          Testimonials
        </A>
        <A to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </A>
        <A to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </A>
      </Ul>
    </NavBar>
  );
}

export default Nav;
