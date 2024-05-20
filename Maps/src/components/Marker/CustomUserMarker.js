import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

export default function CustomUserMarker({ coordinate, imageUrl }) {
  return (
    <Marker coordinate={coordinate}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
    </Marker>
  );
}

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 25,
  },
  image: {
    width: 50,
    height: 50,
  },
});
