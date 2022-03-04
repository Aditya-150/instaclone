import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
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
    name: "Shop",
    active:
      "https://img.icons8.com/fluency-systems-filled/48/ffffff/bag-front-view.png",
    inactive:
      "https://img.icons8.com/fluency-systems-regular/48/ffffff/bag-front-view.png",
  },
  {
    name: "Profile",
    active:
      "https://pbs.twimg.com/profile_images/1480772552305745920/2STj0Aao_400x400.jpg",
    inactive:
      "https://pbs.twimg.com/profile_images/1480772552305745920/2STj0Aao_400x400.jpg",
  },
];
const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState("Home")

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>  
      <Image source={{uri: activeTab == icon.name ? icon.active : icon.inactive}} style={[styles.icon, icon.name == "Profile" ? styles.profilePic : null]}/>
    </TouchableOpacity>
  )
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical"/>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '0%',
    zIndex: 999,
    backgroundColor:'#000000'
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  icon: {
    width: 30, 
    height: 30,
  },
  profilePic: {
    borderRadius: 50,
    borderColor: "#ffffff",
  },
})

export default BottomTabs;
