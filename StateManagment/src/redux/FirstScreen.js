import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./counterSlice";

export default function FirstScreen() {
  const { value } = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>First : {value}</Text>
      <Button title="Artir" onPress={() => dispatch(increment())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
