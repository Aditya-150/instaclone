import React, { useState }from "react";
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validators from "email-validator";

const LoginForm = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#666666"
          placeholder="Phone number, username or email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
      </View>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#666666"
          placeholder="Password"
          autoCapitalize="none"
          textContentType="password"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>
      <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
        <Text style={{ color: "#3bb4ff" }}>Forgot password?</Text>
      </View>
      <Pressable
        titleSize={20}
        style={styles.button}
        onPress={() => console.log("You clicked me")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </Pressable>
      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={{ color: "#008cff" }}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    borderWidth: 1,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderColor: "#d9d9d9",
  },
  button: {
    backgroundColor: "#008cff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    minHeight: 42,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
  signupContainer: {
      flexDirection: "row",
      width: '100%',
      justifyContent: "center",
      marginTop: 10,
  }
});

export default LoginForm;
