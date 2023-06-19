import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/Action";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScreenOneStyle } from "../styles/ScreenOneStyle";

const ScreenOne = ({ navigation }) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const handleDescriptionChange = (text) => {
    const limitedDescription = text.split(" ").slice(0, 300).join(" ");
    setDescription(limitedDescription);
  };

  const dispatch = useDispatch();

  const addNotes = async () => {
    const item = {
      title: title,
      description: description,
    };
    dispatch(addItem(item));

    try {
      const existingData = await AsyncStorage.getItem("notes");
      let notes = existingData ? JSON.parse(existingData) : [];
      notes.push(item);
      await AsyncStorage.setItem("notes", JSON.stringify(notes));
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <View style={ScreenOneStyle.mainView}>
      <Text
        style={ScreenOneStyle.headingText}
      >
        Create A Note
      </Text>
      <TextInput
        placeholder="Enter Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={ScreenOneStyle.titleTextInput}
      />
      <TextInput
        placeholder="Enter Description Max word 300"
        multiline={true}
        value={description}
        onChangeText={handleDescriptionChange}
        style={ScreenOneStyle.discriptionTextInput}
      />
      <TouchableOpacity
        style={ScreenOneStyle.TouchableButton}
        onPress={addNotes}
      >
        <Text style={{ fontSize: 20, alignSelf: "center" }}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenOne;

