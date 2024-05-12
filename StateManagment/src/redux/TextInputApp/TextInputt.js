import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getText } from "./textSlice";

export default function TextInputt() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(getText(text));
    setText("");
  };

  console.log(text);

  return (
    <View>
      <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 8 }}>
        Text Bilgisi Girin
      </Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderRadius: 5,
          borderColor: "#EEEEEE",
          padding: 5,
          marginHorizontal: 4,
          marginBottom: 8,
        }}
        placeholder="Metin Girin..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Ekle" onPress={handleButton} />
    </View>
  );
}

const styles = StyleSheet.create({});
