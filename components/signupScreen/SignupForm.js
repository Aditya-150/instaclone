import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const SignUpForm = () => {
  const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(2, "An username is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password must be of at least 6 characters"),
  });
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={SignUpFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#d9d9d9"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#666666"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.username.length || values.username.length >= 2
                      ? "#d9d9d9"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#666666"
                placeholder="Username"
                autoCapitalize="none"
                textContentType="username"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? "#d9d9d9"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#666666"
                placeholder="Password"
                autoCapitalize="none"
                textContentType="password"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
            <View style={styles.signupContainer}>
              <Text>Already have an account?</Text>
              <TouchableOpacity>
                <Text style={{ color: "#008cff" }}> Log In</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
    width: 380,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    borderWidth: 1,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderColor: "#d9d9d9",
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#008cff" : "#8ce4ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    minHeight: 42,
    marginTop: 30,
  }),
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 30,
  },
});

export default SignUpForm;
