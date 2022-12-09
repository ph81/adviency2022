import styled, { createGlobalStyle } from 'styled-components';
import christmasbg from './images/christmas-boxes.jpg';

const GlobalStyles = createGlobalStyle`
:root {
  --darkgreen: rgb(0,100,0);
  --semiwhite: #f7f7f7;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    
}
html {
    box-sizing: border-box;
    font-size: 62.5%;
    @media only screen and (max-width: 1200px){
        font-size: 58%;
    }
    @media only screen and (min-width: 1980px){
        font-size: 70%;
    }
}
body { 
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 400;
  background-image: url(${christmasbg});
  background-size:cover;
  background-repeat:no-repeat;
  color: var(--semiwhite);

}
hr {
  border: none;
  border-top: 1px solid var(--clr-grey-8);
}
h1,h2,h3,h4,h5,h6 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  font-family: 'Press Start 2P', cursive;
}
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 1.2rem;
}
h5 {
  font-size: 1rem;
}
h2,
p {
  margin-bottom: 1.2rem;
}
a {
  color: inherit;
  text-decoration: none;
  
  &:active {
    transform: traslateY(3rem);
  }
}
ul {
  text-align: left;
} 
svg {
  font-size: 2rem;
  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
}
`;

export default GlobalStyles;

export const Container = styled.div`
  margin: 4rem auto;
  padding: 0 50px;
  max-width: 980px;
  @media (max-width: 400px) {
    padding: 0 10px;
  }
  @media (max-width: 991px) {
    padding: 0 30px;
  }
`;

export const SpecialTitle = styled.h1`
  display: table;
  padding: 0 1.5rem;
  margin: -2.8rem 0 1rem;
  color: black;
  background-color: #fff;
`;

export const Section = styled.section`
  margin: 28rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
