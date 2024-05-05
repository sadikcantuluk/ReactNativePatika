import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import UserCard from "./src/components/UserCard";
import Loading from "./src/components/Loading";

export default function App() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUserList(response.data);
    setLoading(false);
  }

  function renderUser({ item }) {
    return <UserCard user={item} />;
  }

  function loadingScreen() {
    return;
  }

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={userList}
          keyExtractor={(item) => item.id}
          renderItem={renderUser}
        />
      )}
      <View style={styles.button}>
        <Button title="Fetch Data" onPress={fetchData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
