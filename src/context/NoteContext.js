import React from "react";
import createDataContext from "./createDataContext";

const NoteContext = React.createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case "edit_note":
      return state.map((note) => {
        return note.id === action.payload.id ? action.payload : note;
        // if (note.id === action.payload.id) {
        //   return action.payload;
        // } else {
        //   return note;
        // }
      });
    case "delete_note":
      return state.filter((note) => note.id === action.payload);
    case "add_note":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};
const addNote = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_note", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteNote = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_note", payload: id });
  };
};

const editNote = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "edit_note",
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  noteReducer,
  { addNote, deleteNote, editNote },
  []
);
