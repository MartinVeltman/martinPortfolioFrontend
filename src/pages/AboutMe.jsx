import styled from 'styled-components';
import '../App.css';
import SocialIcons from "../components/SocialIcons";

const StyledSpan = styled.h1`
  font-weight: bolder;
  font-size: 1.5em;

`;

const StyledH1 = styled.h1`
  font-size: 20px`

const ListItem = styled.li`
  color: #D88769;`;

const AboutText = styled.p`
    width: 30%;
  @media (max-width: 1200px){
    width: 55%
  }
`;

const LanguageList = styled.ul`
`;

const AboutMeDiv = styled.div`
    align-items: normal;
  @media (max-width: 700px){
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }
  
`;

const NavToProjects = styled.button`
    width: 300px;
`;


function AboutMe() {
    const navigateToProjects = () => {
        window.location = '/projects';
    }


    return (
        <AboutMeDiv className="app">
            <StyledH1>My name is <StyledSpan>Martin Veltman</StyledSpan></StyledH1>
            <AboutText>I am a full stack developer with a passion for learning and creating. I have a background in web
                development and have worked in the industry for over 1 year. I have a passion for learning new
                technologies and I am always looking to learn new things. I am currently in my third year of my bachelor
                in computer sience</AboutText>

            <StyledH1>Technologies I've learned from best to worst</StyledH1>
            <LanguageList>
                <ListItem>Typescript and Javascript</ListItem>
                <ListItem>Java</ListItem>
                <ListItem>Angular</ListItem>
                <ListItem>Springboot</ListItem>
                <ListItem>React</ListItem>
                <ListItem>HTML & CSS</ListItem>
                <ListItem>SQL Databases</ListItem>
                <ListItem>Machine Learning with Python</ListItem>
                <ListItem>AWS</ListItem>
                <ListItem>Firebase</ListItem>
            </LanguageList>
            <SocialIcons></SocialIcons>

            <NavToProjects onClick={navigateToProjects}>View my projects</NavToProjects>
        </AboutMeDiv>


    );
}

export default AboutMe;
