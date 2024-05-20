import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import useFetch from "./hooks/useFetch";
import Loading from "./src/components/Loading/Loading";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://random-data-api.com/api/v2/users?size=30"
  );

  console.log({ data, loading, error });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView provider="google" style={{ flex: 1 }} />
      {loading && <Loading />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
