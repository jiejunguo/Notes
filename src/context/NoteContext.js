import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const NoteContext = React.createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case "add_note":
      return [...state, { title: `Note #${state.length + 1}` }];
    default:
      return state;
  }
};
const addNote = (dispatch) => {
  return () => {
    dispatch({ type: "add_note" });
  };
};

export const { Context, Provider } = createDataContext(
  noteReducer,
  { addNote },
  []
);
