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
              url: "https://img.icons8.com/fluency-system-regular/24/ffffff/plus-2-math--v1.png",
            }}
          />
        </TouchableOpacity>
        <Text style={{ color: "white" }}>Test</Text>
        <Text style={{ color: "white" }}>Test</Text>
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
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  }
})
export default header