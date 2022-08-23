export const projects = [
  {
    id: 1,
    title: "React-Calculator using useState",
    description:
      "En enkel kalkulator laget i React. Bruker useState/useEffect for funksjonalitet og styled-components for CSS",
    tech: ["React", "styled components"],
    img: require("../../images/calculator.png"),
    sourceCode: "https://github.com/JamesDa1/react-calculator-useState",
    liveLink: "https://jamesda1.github.io/react-calculator-useState/",
  },
  {
    id: 2,
    title: "Fake Store",
    description:
      "En web store laget i React. Jeg brukte useContext og useReducer for handlelisten, axios for å hente informasjon fra API. ",
    tech: ["React", "useContext", "useReducer"],
    img: require("../../images/fake-store.png"),
    sourceCode: "https://github.com/JamesDa1/fake-store-v2",
    liveLink: "https://jamesda1.github.io/fake-store-v2/",
  },
  {
    id: 3,
    title: "devFinder",
    description:
      "Using the github users API to fetch publicly available info on a user. It's interactive",
    tech: ["React", "useContext", "useReducer"],
    img: require("../../images/devFinder.png"),
    sourceCode: "https://github.com/JamesDa1/dev-finder",
    liveLink: "https://jamesda1.github.io/fake-store-v2/",
  },
]
