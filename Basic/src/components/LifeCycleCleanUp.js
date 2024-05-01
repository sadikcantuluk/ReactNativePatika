import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";

const LifeCycleCleanUp = () => {
  const [hello, setHello] = useState(true);

  return (
    <View>
      <Button title="Tıkla" onPress={() => {
          setHello(!hello);
        }}
      />
      {hello && <Hello/>}
    </View>
  );
};

export default LifeCycleCleanUp;

const styles = StyleSheet.create({});

const Hello = () => {
  useEffect(() => {
    console.log("Merhaba Dünya");

    return () => {
      console.log("Gidiyorum Dünya"); //return fonksiyonu Component ortadan kaldırıldığında 
    };                                //ne yapılacağını söyler. Buna useEffect()'in Clean Up 
  }, []);                             //özelliği denir.
  
  return <View>
    <Text>Hello I'm Hello Component</Text>
  </View>
};
