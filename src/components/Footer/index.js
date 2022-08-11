import React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <div className="contactDetails">
        <h3>TA KONTAKT</h3>
        <p
          onClick={(e) => {
            navigator.clipboard.writeText(e.target.textContent)
          }}
        >
          epost: <span className="mailSelect">husniadan@gmail.com</span>
        </p>
      </div>
      <div className="additionalLinks">
        <h3>SOCIAL MEDIA</h3>
        <div className="logos">
          <a href="https://github.com/JamesDa1" target="_blank">
            <AiFillGithub style={{ fontSize: "2rem" }} />
          </a>
          <AiFillLinkedin style={{ fontSize: "2rem" }} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
