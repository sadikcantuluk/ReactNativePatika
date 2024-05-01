import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";

const Welcome = (props) => {
  const handlePress = () => {
    props.navigation.navigate('MemberSign')
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fit Clup Spor Merkezi</Text>
      <Button text="Üye Kaydı Oluştur" pressButton={handlePress} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
