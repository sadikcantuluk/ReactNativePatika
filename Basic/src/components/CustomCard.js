import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
} from "react-native";
import React from "react";

const CustomCard = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card_container}>
        <View style={styles.card_body}>
          <Text style={styles.card_body_title}>{props.title}</Text>
          <Text style={styles.card_body_text}>{props.text}</Text>
        </View>
        <TouchableOpacity style={styles.card_button} onPress={()=>{Alert.alert('Merhaba '+props.title)}}>
          <Text style={styles.card_button_text}>I LIKED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  card_container: {
    backgroundColor: "white",
    marginTop: 30,
    margin: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },
  card_body: {
    padding: 5,
  },
  card_body_text: {
    paddingBottom: 5,
    fontSize: 16,
  },
  card_body_title: {
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  card_button: {
    backgroundColor: "#00C2FF",
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00C2FF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_button_text: {
    color:'white',
    fontSize:15
  },
});
