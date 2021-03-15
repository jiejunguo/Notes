import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/NoteContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const noteToEdit = state.find(
    (noteToEdit) => noteToEdit.id === navigation.getParam("id")
  );
  const [title, setTitle] = useState(noteToEdit.title);
  const [content, setContent] = useState(noteToEdit.content);

  return (
    <View>
      <TextInput
        style={styles.titleInput}
        placeholder="Input Title Here"
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <TextInput
        style={styles.contentInput}
        placeholder="Content"
        onChangeText={(content) => setContent(content)}
        value={content}
      />
    </View>
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

export default EditScreen;
