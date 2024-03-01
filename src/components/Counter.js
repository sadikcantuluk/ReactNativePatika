import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, ScrollView } from "react-native";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.number);
  const handleInc = () => {
    setCounter(counter + 1);
  };
  const handleDesc = () => {
    setCounter(counter - 1);
  };
  return (
    <ScrollView>
      <Text>Counter : {counter}</Text>
      <Button title="Artır" onPress={handleInc} />
      <Button title="Azalt" onPress={handleDesc} />
    </ScrollView>
  );
};

export default Counter;

const styles = StyleSheet.create({});
