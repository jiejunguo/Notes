import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
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
        oonChangeText={(text) => setTitle(text)}
        value={title}
      />
      <TextInput
        style={styles.contentInput}
        placeholder="Content"
        oonChangeText={(content) => setContent(content)}
        value={content}
      />
      <Button title="Add Note" onPress={() => addNote(title, content)} />
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
    height: 60,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "grey",
    paddingLeft: 20,
  },
});

export default CreateScreen;
