import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

const NoteContentForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Input Title Here"
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <TextInput
        multiline
        style={styles.contentInput}
        placeholder="Input Content Here"
        onChangeText={(content) => setContent(content)}
        value={content}
      />
      <TouchableOpacity
        onPress={() => onSubmit(title, content)}
        style={styles.button}
      >
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

NoteContentForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  titleInput: {
    height: 60,
    fontSize: 18,
    borderWidth: 0.5,
    borderColor: "grey",
    paddingLeft: 20,
    backgroundColor: "deepskyblue",
  },
  contentInput: {
    height: 400,
    fontSize: 18,
    borderWidth: 0.5,
    borderColor: "grey",
    paddingLeft: 20,
    backgroundColor: "lightskyblue",
  },
  button: {
    height: 60,
    backgroundColor: "paleturquoise",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff5c5c",
  },
  buttonText: {
    fontSize: 25,
  },
});

export default NoteContentForm;
