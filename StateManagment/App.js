import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import FirstScreen from "./src/redux/FirstScreen";
import SecondScreen from "./src/redux/SecondScreen";
import UserList from "./src/redux/UserList";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <FirstScreen/>
        <SecondScreen/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
