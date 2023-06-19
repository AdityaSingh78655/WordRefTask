import { StyleSheet } from "react-native";
import { dynamicSize, normalizeFont } from "../utils/Responsive";

export const ScreenTwoStyle = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: dynamicSize(30),
    paddingHorizontal: dynamicSize(20),
  },
  headingText: {
    alignSelf: "center",
    fontSize: normalizeFont(25),
    fontWeight: "bold",
    marginBottom: 20,
  },
  searchTextInput: {
    marginBottom: dynamicSize(10),
    borderWidth: 1,
    padding: dynamicSize(5),
    borderRadius: 10,
  },
  flatListView: {
    marginBottom: dynamicSize(10),
    backgroundColor: "yellow",
    padding: dynamicSize(10),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editTitleTextInput: {
    marginBottom: dynamicSize(10),
    borderWidth: 1,
    padding: dynamicSize(5),
    width: dynamicSize(200),
  },
  editDiscTextInput: {
    marginBottom: dynamicSize(10),
    borderWidth: 1,
    padding: dynamicSize(5),
    width: dynamicSize(200),
  },
  saveButton: { color: "blue", fontWeight: "bold" },
  titleText: {
    fontSize: normalizeFont(18),
    fontWeight: "bold",
    width: dynamicSize(200),
  },
  discriptionText: { width: dynamicSize(200) },
  deleteTouch: { alignSelf: "center" },
  deleteText: { color: "red" },
  editTouch: { alignSelf: "center" },
  editText: { color: "blue" },
});
