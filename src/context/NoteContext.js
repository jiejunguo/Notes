import React, { useReducer } from "react";

const NoteContext = React.createContext();

const noteReducer = (state, action) => {
  switch (action.type) {
    case "add_note":
      return [...state, { title: `Note #${state.length + 1}` }];
    default:
      return state;
  }
};

export const NoteProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(noteReducer, []);

  const addNote = () => {
    dispatch({ type: "add_note" });
  };

  return (
    <NoteContext.Provider value={{ data: notes, addNote }}>
      {children}
    </NoteContext.Provider>
  );
};
export default NoteContext;
