import React from "react"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from "./SidebarElements"

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" activeStyle>
            _hello
          </SidebarLink>
          <SidebarLink to="/about" activeStyle>
            _om-meg
          </SidebarLink>
          <SidebarLink to="/projects" activeStyle>
            _prosjekter
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <h3>Ta kontakt:</h3>
          <p
            onClick={(e) => {
              navigator.clipboard.writeText(e.target.textContent)
            }}
          >
            husniadan@gmail.com
          </p>
        </SideBtnWrap>
        <div className="socialMedia">
          <h3>find me in:</h3>
          <div className="logos">
            <AiFillLinkedin style={{ fontSize: "2rem" }} />
            <AiFillGithub style={{ fontSize: "2rem" }} />
          </div>
        </div>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
