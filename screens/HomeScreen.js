import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, StatusBar } from 'react-native'
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories';

const HomeScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
          <Header />
          <Stories/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
export default HomeScreen