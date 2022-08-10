import React from "react"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  icoGitHub,
  icoLinkedIn,
} from "./NavbarElements"

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>james-dasher</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            _hello
          </NavLink>
          <NavLink to="/om-meg" activeStyle>
            _om-meg
          </NavLink>
          <NavLink to="/prosjekter" activeStyle>
            _prosjekter
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">
            Sign in
            <icoGitHub />
          </NavBtnLink>
          <icoGitHub />
        </NavBtn>
        <NavBtn>
          <a href="google.com">GitHub</a>
          <a href="google.com">LinkedIn</a>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
