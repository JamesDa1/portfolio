import React from "react"
import { Nav, NavLink, Bars, NavMenu, SocialLinks } from "./NavbarElements"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">james-dasher</NavLink>
        <Bars onClick={toggle} />
        <NavMenu className="NavMenu">
          <NavLink to="/">_hello</NavLink>
          <NavLink to="/about">_om-meg</NavLink>
          <NavLink to="/projects">_prosjekter</NavLink>
        </NavMenu>

        <SocialLinks>
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
        </SocialLinks>
      </Nav>
    </>
  )
}

export default Navbar
