import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/NoteContext";
import { FontAwesome } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, addNote, deleteNote } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(data) => data.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteNote(item.id)}>
                  <FontAwesome
                    name="trash-o"
                    size={24}
                    color="black"
                    style={styles.button}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Button
        title="Add Note"
        onPress={addNote}
        size={24}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderColor: "grey",
  },
  title: {
    fontSize: 18,
  },
  button: {},
});

export default IndexScreen;
