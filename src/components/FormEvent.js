import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayCreatedEvent from "./DisplayCreatedEvent";
import Label from "./Label";
import { action } from "../redux/formReducerSlice";

const FormEvent = () => {
  const dispatch = useDispatch();
  const formEventValue = useSelector((state) => state.taskList[0].tasks);
  const [displayEvent, setDisplayEvent] = useState(false);
  const createClickHandler = (e) => {
    setDisplayEvent(true);
  };
  const deleteHandler = (e) => {
    dispatch(action.DeleteEvent({ data: { text: "" } }));
  };
  return (
    <div className="mainContainer">
      <div className="form-container">
        <h3 className="createEventHeading">Create Event...!</h3>
        <div className="form_Wrapper">
          {formEventValue.map((item, index) => {
            return <Label item={item} key={index} />;
          })}
        </div>
      </div>
      <div className="EventWrapper">
        <h3 className="createEventHeading"> Event Created ....!</h3>
        <DisplayCreatedEvent formEventValue={formEventValue} />
        <button onClick={deleteHandler} className="Deletebutton">
          Delete Event
        </button>
      </div>
    </div>
  );
};

export default FormEvent;
