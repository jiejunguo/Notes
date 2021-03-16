import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/NoteContext";
import NoteContentForm from "../components/NoteContentForm";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editNote } = useContext(Context);
  const noteToEdit = state.find(
    (noteToEdit) => noteToEdit.id === navigation.getParam("id")
  );

  return (
    <NoteContentForm
      initialValues={{ title: noteToEdit.title, content: noteToEdit.content }}
      onSubmit={(title, content) => {
        editNote(id, title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

const styles = StyleSheet.create();

export default EditScreen;
