import React from "react"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Navbar = ({ toggle }) => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          <h1>james-dasher</h1>
        </NavLink>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to="/">_hello</NavLink>
          <NavLink to="/about">_om-meg</NavLink>
          <NavLink to="/projects">_prosjekter</NavLink>
        </NavMenu>
        <NavBtn>
          <a href="https://github.com/JamesDa1" target="_blank">
            <AiFillGithub style={{ fontSize: "2rem" }} />
          </a>
          <AiFillLinkedin style={{ fontSize: "2rem" }} />
        </NavBtn>
      </Nav>
    </div>
  )
}

export default Navbar
