import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function UserCard({ user }) {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text>
          Name : {user.name} - User Name : {user.username}
        </Text>
      </View>
      <View style={styles.phone}>
        <Text>Phone : {user.phone}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 10,
    borderRadius:5
  },
  name: {
    backgroundColor: "grey",
    padding:5,
    alignItems:'center',
    justifyContent:'center'
  },
  phone: {
    backgroundColor: "lightblue",
    alignItems:'center',
    justifyContent:'center',
    padding:5
  },
});
