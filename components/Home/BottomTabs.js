import React, { useState } from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/fluency-systems-filled/48/ffffff/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png",
  },
  {
    name: "Search",
    active: "https://img.icons8.com/ios-filled/50/ffffff/search--v1.png",
    inactive: "https://img.icons8.com/ios/50/ffffff/search--v1.png",
  },
  {
    name: "Reels",
    active: "https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png",
    inactive: "https://img.icons8.com/ios/50/ffffff/instagram-reel.png",
  },
  {
    name: "Profile",
    active:
      "https://pbs.twimg.com/profile_images/1480772552305745920/2STj0Aao_400x400.jpg",
    inactive:
      "https://pbs.twimg.com/profile_images/1480772552305745920/2STj0Aao_400x400.jpg",
  },
];
const BottomTabs = () => {
  return (
    <View>
      <Text>BottomTabs</Text>
    </View>
  );
};

export default BottomTabs;
