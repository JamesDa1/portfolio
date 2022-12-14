import styled from "styled-components"

export const ProjectContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: 5%;

  gap: 6rem;
  width: 100%;
  max-width: 1440px;

  color: white;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    margin-bottom: 2rem;
    gap: 1rem;
  }
`

export const ProjectInfo = styled.div`
  padding-top: 1rem;
  max-width: 355px;
`

export const ProjectTitle = styled.h2`
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const ProjectDescription = styled.p`
  color: #f3fbed;
  font-size: 1.5rem;
  line-height: 1.85rem;
`

export const ProjectImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
`

export const ProjectTechWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  align-items: center;
  padding: 0.5rem;
`

export const ProjectTech = styled.p`
  background-color: #23455a;
  padding: 0.25rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
`

export const ProjectActions = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  min-width: 298px;
`
export const ProjectSource = styled.a`
  background: #f7fff1;
  color: #141f26;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;

  min-width: 134px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1.5rem;
  border-radius: 6px;

  &:hover {
    transform: scale(1.1);
  }
`

export const ProjectDemo = styled.a`
  color: #62fbd7;
  border: 2px solid #62fbd7;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`
