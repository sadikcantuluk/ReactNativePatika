import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import { db } from "../../fireBase/config";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";

export default function Read() {
    
  const [veriListesi, setVeriListesi] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "FirstDb"));
    onSnapshot(q, (querySnapshot) => {
      setVeriListesi(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {veriListesi.map((item, index) => (
        <View key={index} style={styles.box}>
          <Text>{item.data.ID}</Text>
          <Text>{item.data.Title}</Text>
          <Text>{item.data.Price}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    margin:10
  },
  box:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    padding:8,
    width:'100%',
    marginBottom:10
  }
});
