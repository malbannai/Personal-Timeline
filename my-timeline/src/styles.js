import styled, { createGlobalStyle } from "styled-components";

const GlobalStayle = createGlobalStyle`
body{
    padding: 0;
    margin: 0;
    background: ${(props) => props.theme.backgroundColor};
}

h1{
    font-family: ${(props) => props.theme.textFont};
    text-align: center;
    font-size: 45px;
    color: ${(props) => props.theme.nickelColotr};
}
`;
const EventWrapper = styled.div`
  width: 60%;
  margin: 15px;
  background: ${(props) => props.theme.melonColor};
  border-radius: 10px;

  h2 {
    text-align: center;
  }
  h3 {
    text-align: center;
  }
`;

const EventsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  dir: "ltr";
  margin: auto;
`;

export { GlobalStayle, EventWrapper, EventsWrapper };
