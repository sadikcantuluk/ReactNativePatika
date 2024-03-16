import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView, TextInput } from "react-native";

const SearchBar = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput placeholder="Ara..." onChangeText={props.appChangeText}/>
      </View>
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin:8,
    borderRadius:10,
    backgroundColor:"#EEEEEE",
    padding:8
  },
});
