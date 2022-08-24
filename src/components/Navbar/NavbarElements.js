import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"

export const Nav = styled.nav`
  background: #011627;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 999;

  h1 {
    color: #607b96;
    font-size: 1.5rem;
  }
`

export const NavLink = styled(Link)`
  color: #607b96;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 80px;
  cursor: pointer;
  font-size: 1.5rem;

  &.NavLink {
    color: red;
  }

  &.active {
    color: #ffb800;

    h1 {
      color: #ffb800;
    }
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  margin-left: 2rem;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 6px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  width: 10%;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
