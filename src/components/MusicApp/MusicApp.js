import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import music_data from "./music_data.json";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native";
import MusicCard from "./MusicCard";
import SearchBar from "./SearchBar";

const MusicApp = () => {
  const [searchList, setSearchList] = useState(music_data);

  const renderItems = ({ item }) => <MusicCard song={item} />;

  const handleChangeText = (text) => {
    const filteredList = music_data.filter((song) => {
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchText) > -1;
    });
    setSearchList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar appChangeText={handleChangeText} />
        <FlatList
          data={searchList}
          renderItem={renderItems}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default MusicApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
