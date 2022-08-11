import heroPortrait from "../images/portrait_cropped.jpg"
import devFinder from "../images/devFinder.png"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

import React from "react"
const Home = () => {
  return (
    <main>
      <div className="homeContainer">
        <div className="heroText">
          <p className="heroGreeting">Hei, jeg er</p>
          <h1 className="heroName">James Dasher</h1>
          <h2 className="heroJobTitle textAccent-blue">
            {">"} Front End Developer
          </h2>

          <div className="heroPortrait">
            <img src={heroPortrait} alt="portrait" />
          </div>
          <div className="comments">
            <p className="comment devFinder"> // enter github username</p>
            <p className="comment devFinder"> // click card to go to page</p>
            <p className="comment"> // find my profile on Github:</p>

            <a href="https://github.com/JamesDa1" target="_blank">
              <p className="commentStyled">
                <span className="textAccent-blue">const</span>{" "}
                <span className="textAccent-green">githubLink</span> =
                <span className="textAccent-orange">
                  {" "}
                  “https://github.com/JamesDa1”
                </span>
              </p>
            </a>
          </div>
        </div>
        <div className="heroProject">
          <h3>To be replaced with devFinder App</h3>
          <img src={devFinder} alt="" />
        </div>
      </div>
    </main>
  )
}

export default Home
