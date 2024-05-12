import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../fireBase/config";

export default function AddItem() {
  const [Id, setId] = useState();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();

  const handleAdd = async () => {
    try {
      await addDoc(collection(db, "FirstDb"), {
        ID: Id,
        Title: title,
        Price: price,
      });
      setId("");
      setTitle("");
      setPrice("");
      console.log("Veri eklendi");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <View>
      <TextInput
        value={Id}
        onChangeText={setId}
        placeholder="Id"
        style={styles.input}
      />
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        style={styles.input}
      />
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder="Price"
        style={styles.input}
      />
      <Button title="Ekle" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    minWidth: "90%",
    marginBottom: 10,
  },
});
