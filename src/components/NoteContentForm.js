import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const NoteContentForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

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
      <Button title="Save Note" onPress={() => onSubmit(title, content)} />
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

export default NoteContentForm;
