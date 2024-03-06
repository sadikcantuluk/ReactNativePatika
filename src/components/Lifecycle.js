import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";

const Lifecycle = () => {
  const [number, setNumber] = useState(0);
  //useEffect state değişikliklerini renderlarını yakalar.
  //En önemli özelliği state değerinin anlık güncel değerini bize veriri.
  //Bunu normal setState yapısı veremez. Buna Declarative State Yapısı denir.
  useEffect(() => {
    console.log("number state render edildi " + number);
  }, [number]);

  const handleButton = () => {
    console.log("1. State value " + number);
    setNumber(number + 1); //setNumber emretmez sadece iletir.
    console.log("2. State value " + number); //setNumber dan sonra bile yeni değeri yakalayamadı.
  };
  return (
    <View>
      <Text>Number : {number}</Text>
      <Button title="Artır" onPress={handleButton} />
    </View>
  );
};

export default Lifecycle;

const styles = StyleSheet.create({});
