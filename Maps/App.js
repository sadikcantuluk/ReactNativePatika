import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import useFetch from "./hooks/useFetch";
import Loading from "./src/components/Loading/Loading";
import CustomUserMarker from "./src/components/Marker/CustomUserMarker";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://random-data-api.com/api/v2/users?size=30"
  );

  // console.log({ data, loading, error });

  const renderUserMarker = () => {
    return data.map(({ id, address: { coordinates }, avatar }) => {
      return (
        <CustomUserMarker
          key={id}
          coordinate={{ latitude: coordinates.lat, longitude: coordinates.lng }}
          imageUrl={avatar}
        />
      );
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView provider="google" style={{ flex: 1 }}>
        {data && renderUserMarker()}
      </MapView>
      {loading && <Loading />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
