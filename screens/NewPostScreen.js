import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import AddNewPost from "../components/newPost/AddNewPost";

const NewPostScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "black",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <AddNewPost />
    </SafeAreaView>
  );
};

export default NewPostScreen;
