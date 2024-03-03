import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Props from "./src/components/Props";
import Counter from "./src/components/Counter";
import FlexTry from "./src/components/FlexTry";
import CustomCard from "./src/components/CustomCard";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    // <Props name="Sadık"/>
    // <Counter number={23} />
    // <FlexTry/>
    <CustomCard title='Eddard Stark' text='Winter is coming...'/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
