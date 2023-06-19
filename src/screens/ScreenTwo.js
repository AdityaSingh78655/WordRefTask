import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, editItem } from "../../redux/Action";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScreenTwoStyle } from "../styles/ScreenTwoStyle";

const ScreenTwo = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const dispatch = useDispatch();
  
  

  useEffect(() => {
    const retrieveNotes = async () => {
      try {
        const existingData = await AsyncStorage.getItem("notes");
        const parsedNotes = existingData ? JSON.parse(existingData) : [];
        setNotes(parsedNotes);
      } catch (error) {
        console.log("Error", error);
      }
    };

    retrieveNotes();
  }, []);

  const handleDelete = async (index) => {
    dispatch(removeFavorite(index));

    try {
      const updatedNotes = notes.filter((item, i) => i !== index);
      await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleSave = async (index) => {
    const updatedItem = {
      ...notes[index],
      title: editedTitle,
      description: editedDescription,
    };
    dispatch(editItem(index, updatedItem));

    try {
      const updatedNotes = [...notes];
      updatedNotes[index] = updatedItem;
      await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    } catch (error) {
      console.log("Error", error);
    }

    setEditIndex(null); // Clear the edit index and reset the edited values
    setEditedTitle("");
    setEditedDescription("");
  };

  const [editIndex, setEditIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  // Filter the notes based on the search query
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={ScreenTwoStyle.mainView}>
      <Text
        style={ScreenTwoStyle.headingText}
      >
        Your Notes
      </Text>

      {/* Search input */}
      <TextInput
        style={ScreenTwoStyle.searchTextInput}
        placeholder="Search by title"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <FlatList
        data={filteredNotes} // Use the filteredNotes instead of notes
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={ScreenTwoStyle.flatListView}
          >
            {editIndex === index ? (
              <View>
                <TextInput
                  value={editedTitle}
                  onChangeText={(text) => setEditedTitle(text)}
                  style={ScreenTwoStyle.editTitleTextInput}
                />
                <TextInput
                  value={editedDescription}
                  onChangeText={(text) => setEditedDescription(text)}
                  style={ScreenTwoStyle.editDiscTextInput}
                />
                <TouchableOpacity onPress={() => handleSave(index)}>
                  <Text style={ScreenTwoStyle.saveButton}>Save</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <Text style={ScreenTwoStyle.titleText}>
                  {item.title}
                </Text>
                <Text style={ScreenTwoStyle.discriptionText}>{item.description}</Text>
              </View>
            )}
            <TouchableOpacity
              onPress={() => handleDelete(index)}
              style={ScreenTwoStyle.deleteTouch}
            >
              <Text style={ScreenTwoStyle.deleteText}>Delete</Text>
            </TouchableOpacity>
            {editIndex !== index && ( // Edit button visibility condition
              <TouchableOpacity
                onPress={() => {
                  setEditIndex(index);
                  setEditedTitle(item.title); // Set the edited title to the current item's title
                  setEditedDescription(item.description); // Set the edited description to the current item's description
                }}
                style={ScreenTwoStyle.editTouch}
              >
                <Text style={ScreenTwoStyle.editText}>Edit</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
};

export default ScreenTwo;
