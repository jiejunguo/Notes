import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/NoteContext";
import { FontAwesome } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const note = state.find((note) => note.id === navigation.getParam("id"));

  return (
    <View>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <FontAwesome name="edit" size={28} color="black" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    height: 60,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
  },
  content: {
    height: 200,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "grey",
    paddingLeft: 20,
  },
});

export default ShowScreen;
