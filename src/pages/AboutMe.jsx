import styled from 'styled-components';
import {useState} from "react";

const StyledSpan = styled.h1`
  font-weight: bolder;
  font-size: 1.5em;;

`

const StyledH1 = styled.h1`
  font-size: 20px`


function AboutMe() {
    const navigateToProjects = () => {
        window.location = '/projects';
    }


    return (
        <div className="app">
            <StyledH1>My name is <StyledSpan>Martin Veltman</StyledSpan></StyledH1>
            <p>I am a full stack developer with a passion for learning and creating. I have a background in web
                development and have worked in the industry for over 1 year. I have a passion for learning new
                technologies and I am always looking to learn new things. I am currently in my third year of my bachelor
                in computer sience</p>

            <button onClick={navigateToProjects}>View my projects</button>


        </div>


    );
}

export default AboutMe;
