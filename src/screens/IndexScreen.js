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
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Edit", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteNote(item.id)}>
                  <FontAwesome name="trash-o" size={28} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Create")}
      >
        <FontAwesome name="plus-square-o" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderColor: "grey",
    backgroundColor: "deepskyblue",
    borderRadius: 10,
    marginHorizontal: 2,
    marginVertical: 1,
    shadowColor: "grey",
  },
  title: {
    fontSize: 18,
  },
  button: {
    paddingRight: 20,
  },
});

export default IndexScreen;
