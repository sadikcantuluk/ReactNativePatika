import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";

const Books = () => {
  const [book, setBook] = useState("");
  const [readdedBookList, setreaddedBookList] = useState([]);
  
  const [bookList, setBookList] = useState([]);
  
  const handlePress = () => {
    setBookList([...bookList, book]);
  };

  const handleChangeText = (text) => {
    setBook(text);
  };

  const removeBook = (bookToRemove) => {
    setBookList(bookList.filter((book) => book !== bookToRemove));
    setreaddedBookList([...readdedBookList, bookToRemove]);
  };

  const handleDeleteBook = (deleteBookItem) => {
    setreaddedBookList(
      readdedBookList.filter((book) => book !== deleteBookItem));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <View style={styles.inputtitle}>
          <Text style={styles.inputtext}>Kitap Takip</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            value={book}
            style={styles.input}
            onChangeText={handleChangeText}
          />
          <Button title="Ekle" style={styles.inputtext} onPress={handlePress} />
        </View>
      </View>
      <View style={styles.bookscontainer}>
        <FlatList
          data={bookList}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text>{item}</Text>
              <Button title="Okudum" onPress={() => removeBook(item)} />
            </View>
          )}
          keyExtractor={(item) => item}
        />

        {/* {bookList.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item}</Text>
            </View>
          );
        })} */}
      </View>
      <View style={styles.readcontainer}>
        <FlatList
          data={readdedBookList}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text>{item}</Text>
              <Button title="Sil" onPress={() => handleDeleteBook(item)} />
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputcontainer: {
    backgroundColor: "#E26A05",
    flex: 2,
  },
  inputtitle: {
    alignItems: "center",
    marginTop: 40,
  },
  inputtext: {
    fontSize: 35,
  },
  formContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  input: {
    backgroundColor: "white",
    marginRight: 20,
    width: "80%",
  },
  inputButton: {
    color: "white",
  },
  bookscontainer: {
    backgroundColor: "#67C6E3",
    flex: 4,
  },
  readcontainer: {
    backgroundColor: "#FFE6E6",
    flex: 4,
  },
});
