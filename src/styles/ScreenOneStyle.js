import { Touchable } from "react-native";
import { StyleSheet } from "react-native";
import { dynamicSize, normalizeFont } from "../utils/Responsive";

export const ScreenOneStyle = StyleSheet.create({
 mainView:{
     flex: 1, marginTop: 30, paddingHorizontal: 20 
 },
 headingText:{
    alignSelf: "center",
    fontSize: normalizeFont(25),
    fontWeight: "bold",
    marginBottom: dynamicSize(20),
  },
  titleTextInput:{
    borderWidth: 1,
    height: dynamicSize(40),
    marginBottom: dynamicSize(20),
    padding: dynamicSize(10),
    borderRadius: 10,
  },
  discriptionTextInput:{
    borderWidth: 1,
    height: dynamicSize(120),
    fontSize: normalizeFont(20),
    padding: dynamicSize(10),
    borderRadius: 10,
  },
  TouchableButton:{
    marginTop: dynamicSize(20),
    backgroundColor: "skyblue",
    padding: dynamicSize(10),
    width: dynamicSize(100),
    alignSelf: "center",
    borderRadius: 5,
  }
});