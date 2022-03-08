import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import SignupForm from "../components/signupScreen/SignupForm";

const INSTAGRAM_LOGO = "https://cdn-icons-png.flaticon.com/512/174/174855.png";
const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: INSTAGRAM_LOGO }}
          style={{ width: 100, height: 100 }}
        />
        <SignupForm navigation={navigation}/>
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
  },
});

export default SignupScreen;
