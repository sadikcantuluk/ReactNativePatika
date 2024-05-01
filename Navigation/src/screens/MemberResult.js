import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MemberResult = (props) => {
  //   const user = props.route.params.user;

  //veya

  const { user } = props.route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kayıt başarıyla Oluşturuldu !</Text>
      <View>
        <Text>Ad : {user.ad}</Text>
        <Text>Soyad : {user.soyad}</Text>
        <Text>Cinsiyet : {user.cinsiyet}</Text>
        <Text>Yas : {user.yas}</Text>
        <Text>Boy : {user.boy}</Text>
        <Text>Kilo : {user.kilo}</Text>
        <Text>Telefon : {user.telefon}</Text>
      </View>
    </View>
  );
};

export default MemberResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
});
