import { createSlice, current } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const date = new Date().toLocaleDateString("en-in", {
  day: "numeric",
  year: "numeric",
  month: "numeric",
});
const newdate = date.replaceAll("/", ".");

const initialState = {
  taskList: [
    {
      tasks: [
        {
          id: uuid(),
          text: "",
          subtype: "labelField",
          name: "Event Name:-",
          type: "TextBox",
        },
        {
          id: uuid(),
          text: "",
          subtype: "DropDownField",
          type: "TextBox",
          name: "Event Type:-",
          options: {
            "Option 2": "Sports",
            "Option 3": "Music",
            "Option 4": "General",
            "Option 5": "School",
          },
        },
        {
          name: "Start Date:-",
          id: uuid(),
          subtype: "datePickerField",
          text: "",
        },
        { name: "End Date", id: uuid(), subtype: "datePickerField", text: "" },
        {
          id: uuid(),
          name: "Decsription:-",
          text: "",
          subtype: "descriptionLabelField",
          type: "TextBox",
        },
        {
          id: uuid(),
          name: "Event Handled BY:-",
          text: "",
          subtype: "labelField",
          type: "TextBox",
        },
        {
          id: uuid(),
          name: "Organization Name:-",
          text: "",
          subtype: "labelField",
          type: "TextBox",
        },
        {
          id: uuid(),
          text: "",
          name: "Number:-",
          subtype: "numberLabelField",
          type: "TextBox",
        },
      ],
    },
  ],
  tileProperties: "",
};

const formReducerSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    componentUpdateTileVal: (state, action) => {
      const updatedData = state.taskList[0].tasks.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload.data,
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        taskList: [
          {
            ...state.taskList[1],

            tasks: updatedData,
          },
        ],
      };
    },

    DeleteEvent: (state, action) => {
      const updatedData = state.taskList[0].tasks.map((item) => {
        return {
          ...item,
          ...action.payload.data,
        };
      });

      return {
        ...state,
        taskList: [
          {
            ...state.taskList[1],

            tasks: updatedData,
          },
        ],
      };
    },
  },
});
export const action = formReducerSlice.actions;
export default formReducerSlice.reducer;
