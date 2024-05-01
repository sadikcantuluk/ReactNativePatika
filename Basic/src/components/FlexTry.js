import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexTry = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box1]}>
        <Text>A</Text>
      </View>

      <View style={[styles.box2]}>
        <View style={[styles.box2_1]}>
          <Text>B</Text>
        </View>
        <View style={[styles.box2_2]}>
          <Text>C</Text>
        </View>
        <View style={[styles.box2_3]}>
          <Text>D</Text>
        </View>
      </View>

      <View style={[styles.box3]}>
        <Text>E</Text>
      </View>
    </View>
  );
};

export default FlexTry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  box1: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent:'center',
    alignItems:'center'
  },
  box2: {
    flex: 1,
    flexDirection:'row'
  },
  box2_1: {
    flex: 2,
    backgroundColor: "red",
    justifyContent:'center',
    alignItems:'center'
  },
  box2_2: {
    flex: 2,
    backgroundColor: "orange",
    justifyContent:'center',
    alignItems:'center'
  },
  box2_3: {
    flex: 2,
    backgroundColor: "green",
    justifyContent:'center',
    alignItems:'center'
  },
  box3: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent:'center',
    alignItems:'center'
  },
});
