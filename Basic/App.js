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
import LoginScreen from "./src/screens/Login";
import MusicApp from "./src/components/MusicApp/MusicApp";
import Books from "./src/components/books/Books";

export default function App() {
  return (
    <Props name="Mustafa Kemal Atatürk"/>
    // <Counter number={23} />
    // <FlexTry/>
    // <CustomCard title="Eddard Stark" text="Winter is coming..." />
    // <LifeCycleCleanUp/>
    // <LoginScreen/>
    // <MusicApp/>
    // <Books/>
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
