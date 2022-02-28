import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/instalogo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/material-outlined/24/ffffff/plus-2-math--v1.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/material-outlined/24/ffffff/like--v1.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/material-outlined/24/ffffff/facebook-messenger--v1.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    margin: 5,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  }
})
export default header