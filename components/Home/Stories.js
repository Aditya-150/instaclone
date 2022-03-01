import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { USERS } from "../../Data/Users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <Image key={story.id} source={{ uri: story.image }} style={styles.story} />
        ))}
      </ScrollView>
      <Text style={{ color: 'white' }}>Stories</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
})
export default Stories;
