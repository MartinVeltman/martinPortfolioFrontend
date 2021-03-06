import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import '../App.css';

const COLORS = {
    primaryDark: "#343739",
    primaryLight: "#EE982B",
};


const MenuLabel = styled.label`
  background-color: ${COLORS.primaryLight};
  position: fixed;
  top: 4rem;
  right: 5rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
  @media (max-width: 1000px) {
    height: 3rem;
    width: 3rem;
    top: 3rem;
  }
  @media (max-width: 750px) {
    top: 2rem;
    right: 4rem;
  }

`;

const NavBackground = styled.div`
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(${COLORS.primaryDark},
  ${COLORS.primaryLight});
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    right: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }

  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }

  @media (max-width: 1000px) {
    width: 1.5rem;
    margin-top: 1.5rem;
    &::before,
    &::after {
      width: 1.5rem;
      height: 2px;
    }
  }

`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;
  background-image: linear-gradient(120deg,
  transparent 0%,
  transparent 50%,
  #fff 50%);
  background-size: 240%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
                <Icon clicked={click}>&nbsp;</Icon>
            </MenuLabel>
            <NavBackground clicked={click}>&nbsp;</NavBackground>

            <Navigation clicked={click}>
                <List>
                    <li>
                        <ItemLink onClick={handleClick} to="/martin">
                            About Me
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to="/projects">
                            Projects
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to="/books">
                            Books
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to="/courses">
                            Courses
                        </ItemLink>
                    </li>
                    <li>
                        <ItemLink onClick={handleClick} to="/contact">
                            Contact Me
                        </ItemLink>
                    </li>
                </List>
            </Navigation>
        </>
    );
}

export default Navbar;
