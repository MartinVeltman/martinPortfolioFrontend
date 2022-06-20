import styled from 'styled-components';

const StyledSpan = styled.h1`
  font-weight: bolder `

const StyledH1 = styled.h1`
  font-size: 20px`

function AboutMe() {


    return (
        <div className="app">
            <StyledH1>My name is <StyledSpan>Martin Veltman</StyledSpan></StyledH1>

        </div>


    );
}

export default AboutMe;
