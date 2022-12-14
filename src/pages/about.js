import logoReact from "../images/logos_react.svg"
import logoHTML from "../images/logos_html.svg"
import logoCSS from "../images/logos_css.svg"
import logoJavaScript from "../images/logos_javascript.svg"
import logoPython from "../images/logos_python.svg"
import portraitLarge from "../images/PortraitHome.png"
import React from "react"
const About = () => {
  return (
    <div className="about">
      <div className="aboutImage">
        <img src={portraitLarge} alt="portrait" />
      </div>
      <div className="aboutBio">
        <p className="aboutHeader">About</p>
        <h1 className="aboutName">James Dasher</h1>
        <section className="aboutPitch">
          <p>
            Hei, Jeg er James. Jeg går nå på AMO kurset KodeHode hvor jeg lærer
            HTML, JavaScript, CSS og React. Utenom kurset har jeg også
            programmert i Python og Java.
          </p>

          <p>
            Jeg liker å lære nye ting så går nå gjennom udemy kurset {"{"}100
            Days of Code{"}"} og leker litt med datasikkerhet på TryHackME.
          </p>

          <p>
            I fritiden liker jeg å jogge, gå tur med venner og lese bøker,
            manga, manwha, etc. Leser hovedsakelig Sci-Fi og Fantasy, men liker
            også filosofi, historie og psykologi.
          </p>

          <p>
            Går nå gjennom “The Mind Illuminated”, en detaljert gjenomgang av
            meditasjon fra nybegynner til ekspert.
          </p>
        </section>
        <section className="skills">
          <h2>Skills</h2>
          <div className="skillsContainer">
            <div className="skillBox">
              <img class="skillLogo" src={logoReact} alt="Logo React" />
            </div>
            <div className="skillBox">
              <img className="skillLogo" src={logoPython} alt="Logo Python" />
            </div>
            <div className="skillBox">
              <img className="skillLogo" src={logoHTML} alt="Logo Javascript" />
            </div>
            <div className="skillBox">
              <img className="skillLogo" src={logoCSS} alt="Logo React" />
            </div>
            <div className="skillBox">
              <img
                className="skillLogo"
                src={logoJavaScript}
                alt="Logo Python"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
