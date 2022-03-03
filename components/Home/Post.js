import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { POSTS } from "../../Data/Posts";

export const postFooterIcons = [
  {
    name: "Like",
    imageurl: "https://img.icons8.com/material-outlined/ffffff/like--v1.png",
  },
  {
    name: "Comment",
    imageurl:
      "https://img.icons8.com/material-outlined/48/ffffff/speech-bubble--v1.png",
  },
  {
    name: "Share",
    imageurl:
      "https://img.icons8.com/material-outlined/48/ffffff/filled-sent.png",
  },
  {
    name: "Save",
    imageurl:
      "https://img.icons8.com/material-outlined/48/ffffff/bookmark-ribbon--v1.png",
  },
];

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", flexDirection: "row", fontWeight: "700" }}>
      ...
    </Text>
  </View>
);

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 400,
    }}
  >
    <Image
      source={{ uri: post.imageurl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageurl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageurl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageurl} />
    </View>
    <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageurl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "700" }}>{post.user}</Text>
      <Text style={{ color: "white" }}>  {post.caption}</Text>
    </Text>
  </View>
);
const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 5,
    borderWidth: 1.5,
    borderColor: "#ff426b",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});

export default Post;
