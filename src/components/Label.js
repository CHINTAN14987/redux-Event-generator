import React from "react";
import { useDispatch } from "react-redux";
import { action } from "../redux/formReducerSlice";
import { DatePicker, Space, Select } from "antd";
import { store } from "../redux/store";
const Label = ({ item }) => {
  console.log(store.getState());
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    dispatch(action.componentUpdateTileVal({ data: { text: e }, id: item.id }));
  };
  const dateFormat = "DD/MM/YYYY";
  const onChange = (date) => {
    const ModifiedDate = new Date(date)
      .toLocaleDateString("en-in", {
        day: "numeric",
        year: "numeric",
        month: "numeric",
      })
      .replaceAll("/", ".");

    dispatch(
      action.componentUpdateTileVal({
        data: { text: ModifiedDate },
        id: item.id,
      })
    );
  };

  if (item.subtype === "labelField") {
    return (
      <>
        <h3 className="eventHeading">{item.name}</h3>
        <input
          value={item.text}
          onChange={(e) => {
            changeHandler(e.target.value);
          }}
        />
      </>
    );
  }
  if (item.subtype === "descriptionLabelField") {
    return (
      <>
        <h3 className="eventHeading">{item.name}</h3>
        <textarea
          value={item.text}
          onChange={(e) => {
            changeHandler(e.target.value);
          }}
        ></textarea>
      </>
    );
  }

  if (item.subtype === "datePickerField") {
    return (
      <>
        <h3 className="eventHeading">{item.name}</h3>
        <Space direction="vertical">
          <DatePicker onChange={onChange} format={dateFormat} />
        </Space>
      </>
    );
  }
  if (item.subtype === "DropDownField") {
    return (
      <>
        <h3 className="eventHeading">{item.name}</h3>
        <select
          value={item.text}
          onChange={(e) => {
            changeHandler(e.target.value);
          }}
        >
          <option>Select Event...!</option>
          {Object.keys(item.options).map((checkboxItem, index) => {
            return (
              <option
                className="eventInput"
                key={index}
                value={item.options[checkboxItem]}
              >
                {item.options[checkboxItem]}
              </option>
            );
          })}
        </select>
      </>
    );
  }
  if (item.subtype === "numberLabelField") {
    return (
      <>
        <h3 className="eventHeading">{item.name}</h3>
        <input
          value={item.text}
          type="number"
          onChange={(e) => {
            changeHandler(e.target.value);
          }}
        />
      </>
    );
  }
};

export default Label;
