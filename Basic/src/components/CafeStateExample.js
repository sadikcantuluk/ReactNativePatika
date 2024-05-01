import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FlatList, SafeAreaView, Switch } from "react-native";

const data = [
  { id: 1, name: "Buble Cafe", isFavourite: true },
  { id: 2, name: "Sister Cafe", isFavourite: false },
  { id: 3, name: "Dostlar Cafe", isFavourite: false },
  { id: 4, name: "Katman Cafe", isFavourite: true },
  { id: 5, name: "New York Cafe", isFavourite: false },
  { id: 6, name: "Cloud Cafe", isFavourite: true },
];

const CafeStateExample = () => {
  const [cafeList, setcafeList] = useState(data);
  const [showOnlyFavorite, setshowOnlyFavorite] = useState(false);
  const handleSwitch = (isFavouriteSelected) => {
    setshowOnlyFavorite(isFavouriteSelected);
    isFavouriteSelected
      ? setcafeList(cafeList.filter((x) => x.isFavourite))
      : setcafeList(data);
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Change Only Favorite Cafe</Text>
        <Switch value={showOnlyFavorite} onValueChange={handleSwitch} />
      </View>
      <FlatList
        data={cafeList}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
};

export default CafeStateExample;

const styles = StyleSheet.create({});
