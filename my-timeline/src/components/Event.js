import React from "react";
import { EventWrapper } from "../styles";

function Event(props) {
  const holder = props.event;

  return (
    <EventWrapper>
      <h2>{holder.year}</h2>
      <h3>{holder.eventDescription}</h3>
    </EventWrapper>
  );
}

export default Event;
