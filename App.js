import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { NoteProvider } from "./src/context/NoteContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Notes",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <NoteProvider>
      <App />
    </NoteProvider>
  );
};
