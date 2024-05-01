import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./Button.style";

const Button = ({ text, pressButton }) => {

  return (
    <TouchableOpacity onPress={pressButton} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
