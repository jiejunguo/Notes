import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/NoteContext";
import { FontAwesome } from "@expo/vector-icons";

const IndexScreen = () => {
  const { state, addNote } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text>{item.title}</Text>
              <FontAwesome name="trash-o" size={24} color="black" />
            </View>
          );
        }}
      />
      <Button title="Add Note" onPress={addNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default IndexScreen;
