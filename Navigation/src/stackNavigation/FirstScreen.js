import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const FirstScreen = (props) => {
  const handlePress = () => {
    //SAYFA YÖNLENDİRME VE YANINDA VERİ GÖNDERME.
    props.navigation.navigate("Second",{userName:"MUSTAFA KEMAL"});
  };

  return (
    <View>
      <Text>First Screen Hello</Text>
      <Button title="Second Git" onPress={handlePress} />
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({});
