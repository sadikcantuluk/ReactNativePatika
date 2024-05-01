import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Button } from "react-native";

const MusicCard = (props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.song.imageURL }} style={styles.cardImage} />
      <View style={styles.innercontainer}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.artist}>{props.song.artist}</Text>
          <Text style={styles.year}>{props.song.year}</Text>
        </View>
      </View>
      <View style={styles.isSoldOutContainer}>
          <Text
            style={
              props.song.isSoldOut ? styles.isSoldOutYok : styles.isSoldOutVar
            }
          >
            {props.song.isSoldOut ? "Tükendi" : "Stokta"}
          </Text>
        </View>
    </View>
  );
};

export default MusicCard;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    margin: 3,
  },
  cardImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  innercontainer: {
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    flexDirection: "row",
  },
  artist: {
    marginRight: 10,
  },
  year: {
    fontSize: 12,
    color: "#B4B4B8",
  },
  isSoldOutYok: {
    color: "#FF407D",
    borderWidth: 1,
    borderColor: "#FF407D",
    padding: 6,
    borderRadius: 5,
    fontSize: 13,
  },
  isSoldOutVar: {
    color: "#74E291",
    borderWidth: 1,
    borderColor: "#74E291",
    padding: 6,
    borderRadius: 5,
    fontSize: 13,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
  },
  isSoldOutContainer: {
    flex:1,
    alignItems:"flex-end",
    justifyContent:"flex-end"
  },
});
