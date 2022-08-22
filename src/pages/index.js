import heroPortrait from "../images/portrait_cropped.jpg"
import DevFinder from "../features/DevFinder"

import React from "react"
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="heroText">
        <div className="header">
          <p className="heroGreeting">Hei, jeg er</p>
          <h1 className="heroName">James Dasher</h1>
          <h2 className="heroJobTitle textAccent-blue">
            {">"} Front End Developer
          </h2>
        </div>

        <div className="heroPortrait">
          <img src={heroPortrait} alt="portrait" />
        </div>
        <div className="comments">
          <p className="comment devFinder"> {"// enter github username"}</p>
          <p className="comment devFinder"> {"// click card to go to page"}</p>
          <p className="comment"> {"// find my profile on Github:"}</p>

          <a
            href="https://github.com/JamesDa1"
            target="_blank"
            rel="noreferrer"
          >
            <p className="comment">
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
        {/* <h3>To be replaced with devFinder App</h3> */}
        {/* <img src={devFinder} alt="" /> */}
        <DevFinder />
      </div>
    </div>
  )
}

export default Home
