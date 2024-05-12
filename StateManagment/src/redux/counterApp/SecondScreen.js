import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { descrement } from "./counterSlice";

export default function SecondScreen() {
  const { value } = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Second : {value}</Text>
      <Button title="Azalt" onPress={() => dispatch(descrement())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
