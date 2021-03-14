import React, { useState, useContext } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/NoteContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addNote } = useContext(Context);

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
      <Button
        title="Add Note"
        onPress={() =>
          addNote(title, content, () => {
            navigation.navigate("Index");
          })
        }
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

export default CreateScreen;
