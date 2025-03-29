import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Footer() {
    const Div = styled.div`
    width: 100%;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 80px;
    @media (max-width: 768px) {
    
    padding: 20px;}
    `

    const Links = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    align-items:flex-start;
    justify-content: center;
    padding: 20px 0px;

    @media (max-width: 768px) {
    justify-content:  start;
    width: 100%;
    }
    `

    const StyledLink = styled(Link)`
    

    text-decoration: none;
    color: rgb(43, 106, 252);
    font-size: 1rem;

    `
    return (
        <Div>
            <h2>Portfolio's content</h2>
            <Links>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/testimonials">Testimonials</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
            </Links>
            <p style={{ color: 'rgba(245, 254, 251, 0.7)', marginLeft: "auto", marginRight: "auto" }}>Designed and Developed by <span
            style={{
                fontWeight: "bold",
            }}
            >DADDA Hamida</span></p>
        </Div>
    )
}

export default Footer