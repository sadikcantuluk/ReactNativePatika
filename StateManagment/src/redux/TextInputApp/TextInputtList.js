import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

export default function TextInputtList() {
  const { textList } = useSelector((store) => store.text);

  const renderItems = ({ item }) => {
    return <Text>{item}</Text>;
  };

  return (
    <FlatList
      data={textList}
      keyExtractor={(item) => item}
      renderItem={renderItems}
    />
  );
}

