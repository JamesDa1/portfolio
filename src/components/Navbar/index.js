import React from "react"
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./NavbarElements"

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
          <a
            href="https://github.com/JamesDa1"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub style={{ fontSize: "2rem" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/james-dasher-b331ab249"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin style={{ fontSize: "2rem" }} />
          </a>
        </NavBtn>
      </Nav>
    </div>
  )
}

export default Navbar
