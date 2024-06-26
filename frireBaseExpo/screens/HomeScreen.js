import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { auth } from "@/firebase";
import { useNavigation } from "expo-router";
import axios from "axios";

export default function HomeScreen() {
  const navigation = useNavigation();

  async function getCategory() {
    const response = await axios.get("http://localhost:5136/api/Category");
    console.log(response.data);
  }

  useEffect(() => {
    // fetch("http://localhost:5150/api/Room", {
    //   method: "GET",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Headers": "*",
    //     // Diğer başlıklar
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((error) => console.error(error));
    getCategory();
  }, []);

  const handloLogOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Email : {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.btnLogin} onPress={handloLogOut}>
        <Text style={styles.btnText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnLogin: {
    borderWidth: 1,
    backgroundColor: "#68D2E8",
    borderRadius: 5,
    padding: 8,
    borderColor: "#68D2E8",
    marginHorizontal: 25,
    height: 40,
    width: 130,
    alignItems: "center",
  },
  btnText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
});
