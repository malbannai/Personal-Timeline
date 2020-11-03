import React from "react";
import Event from "./Event";
import mydata from "../data";
import { EventsWrapper } from "../styles";

function EventList() {
  const events = mydata.map((event) => <Event event={event} />);
  return <EventsWrapper>{events}</EventsWrapper>;
}

export default EventList;
