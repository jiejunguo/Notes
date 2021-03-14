import React from "react";
import createDataContext from "./createDataContext";

const NoteContext = React.createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case "delete_note":
      return state.filter((note) => note.id !== action.payload);
    case "add_note":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Note #${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};
const addNote = (dispatch) => {
  return () => {
    dispatch({ type: "add_note" });
  };
};

const deleteNote = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_note", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  noteReducer,
  { addNote, deleteNote },
  []
);
