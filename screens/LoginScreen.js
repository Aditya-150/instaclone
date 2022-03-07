import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const INSTAGRAM_LOGO =
  "https://img.icons8.com/fluency/512/000000/instagram-new.png";
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: INSTAGRAM_LOGO }} style={{width: 100, height: 100}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  }
});

export default LoginScreen;
