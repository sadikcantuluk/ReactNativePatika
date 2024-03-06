import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Props from "./src/components/Props";
import Counter from "./src/components/Counter";
import FlexTry from "./src/components/FlexTry";
import CustomCard from "./src/components/CustomCard";
import { SafeAreaView } from "react-native-web";
import CafeStateExample from "./src/components/CafeStateExample";
import Lifecycle from "./src/components/Lifecycle";
import LifeCycleCleanUp from "./src/components/LifeCycleCleanUp";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    // <Props name="Sadık"/>
    // <Counter number={23} />
    // <FlexTry/>
    // <CustomCard title="Eddard Stark" text="Winter is coming..." />
    <LifeCycleCleanUp/>
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
