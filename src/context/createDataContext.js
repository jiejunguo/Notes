import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === {addNote:(dispatch)=>{return()={}}}
    const bondActions = {};
    for (let key in actions) {
      bondActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...bondActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
