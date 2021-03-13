import React, { useState } from "react";

const NoteContext = React.createContext();

export const NoteProvider = ({ children }) => {
  const [Notes, setNotes] = useState([]);
  const addNotes = () => {
    setNotes([...Notes, { title: `Note #${Notes.length + 1}` }]);
  };

  return (
    <NoteContext.Provider value={{ data: Notes, addNotes }}>
      {children}
    </NoteContext.Provider>
  );
};
export default NoteContext;
