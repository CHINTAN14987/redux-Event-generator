import React from "react";
import { useSelector } from "react-redux";
const DisplayCreatedEvent = ({ formEventValue }) => {
  return (
    <div className="displayEvent">
      {formEventValue.map((item, index) => {
        return (
          <div key={index} className="displayEventTiles">
            <span>{item.name}</span>
            <span>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayCreatedEvent;
