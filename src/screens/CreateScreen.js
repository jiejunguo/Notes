import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/NoteContext";
import NoteContentForm from "../components/NoteContentForm";

const CreateScreen = ({ navigation }) => {
  const { addNote } = useContext(Context);

  return (
    <NoteContentForm
      onSubmit={(title, content) => {
        addNote(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

const styles = StyleSheet.create({
  titleInput: {
    height: 60,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "grey",
    paddingLeft: 20,
  },
  contentInput: {
    height: 200,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "grey",
    paddingLeft: 20,
  },
});

export default CreateScreen;
