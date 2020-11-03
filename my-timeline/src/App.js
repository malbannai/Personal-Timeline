import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStayle } from "./styles";
import EventList from "./components/EventList";

const theme = {
  backgroundColor: "#F8F4E3",
  mainTitelColor: "#2A2B2A",
  textFont: "'Bitter', serif",
  nickelColotr: "#706C61",
  melonColor: "#E0AFA0",
  coralColor: "#FF8966",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStayle />
      <h1>My Timeline</h1>
      <EventList />
    </ThemeProvider>
  );
}

export default App;
