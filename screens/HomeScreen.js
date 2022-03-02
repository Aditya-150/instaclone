import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'
import Header from '../components/Home/Header'
import Post from '../components/Home/Post';
import Stories from '../components/Home/Stories';
import { POSTS } from '../Data/Posts';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
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