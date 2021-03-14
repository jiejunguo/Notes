import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import NoteContext from "../context/NoteContext";

const IndexScreen = () => {
  const { data, addNote } = useContext(NoteContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Note" onPress={addNote} />
      <FlatList
        data={data}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
