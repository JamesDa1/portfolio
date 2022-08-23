import {
  ProjectContainer,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
  ProjectImgWrapper,
  ProjectImg,
  ProjectSource,
  ProjectActions,
  ProjectDemo,
  ProjectTechWrap,
  ProjectTech,
} from "./ProjectElements"

import { projects } from "./Data"
import { AiFillGithub } from "react-icons/ai"
import DemoDevFinder from "../../features/DevFinder"
export const ProjectList = () => {
  return (
    <div className="projectsContainer">
      <h1>Prosjekter</h1>
      {projects.map((project) => {
        return <ProjectTemplate id={project.id} {...project} />
      })}
    </div>
  )
}

const ProjectTemplate = (props) => {
  const { title, description, tech, img, sourceCode, liveLink } = props

  if (title === "devFinder") {
    return (
      <ProjectContainer>
        <ProjectImgWrapper>
          <DemoDevFinder />
        </ProjectImgWrapper>

        <ProjectInfo>
          <ProjectTitle>Interactive, {title}</ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
          <ProjectTechWrap>
            {tech.map((tech) => {
              return <ProjectTech>{tech}</ProjectTech>
            })}
          </ProjectTechWrap>
          <ProjectActions>
            <ProjectDemo href={liveLink} target="_blank">
              Demo
            </ProjectDemo>
            <ProjectSource href={sourceCode} target="_blank">
              <AiFillGithub />
              Source Code
            </ProjectSource>
          </ProjectActions>
        </ProjectInfo>
      </ProjectContainer>
    )
  } else {
    return (
      <>
        <ProjectContainer>
          <ProjectImgWrapper>
            <ProjectImg src={img} />
          </ProjectImgWrapper>

          <ProjectInfo>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
            <ProjectTechWrap>
              {tech.map((tech) => {
                return <ProjectTech>{tech}</ProjectTech>
              })}
            </ProjectTechWrap>
            <ProjectActions>
              <ProjectDemo href={liveLink} target="_blank">
                Demo
              </ProjectDemo>
              <ProjectSource href={sourceCode} target="_blank">
                <AiFillGithub />
                Source Code
              </ProjectSource>
            </ProjectActions>
          </ProjectInfo>
        </ProjectContainer>
      </>
    )
  }
}
