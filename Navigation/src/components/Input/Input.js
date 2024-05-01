import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import styles from "../Input/Input.style";

const Input = ({ label, placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput
          style={styles.text_input}
          placeholder={placeholder}
          onChangeText={onChangeText}
        ></TextInput>
      </View>
    </View>
  );
};

export default Input;
