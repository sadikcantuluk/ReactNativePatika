import { Alert, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import useFetch from "./hooks/useFetch";
import Loading from "./src/components/Loading/Loading";
import CustomUserMarker from "./src/components/Marker/CustomUserMarker";
import { useCallback, useRef, useState } from "react";
import UserCard from "./src/components/UserCard/UserCard";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://random-data-api.com/api/v2/users?size=30"
  );

  const mapRef = useRef();

  const renderUserMarker = () => {
    return data.map(
      ({
        id,
        first_name,
        username,
        last_name,
        address: { coordinates },
        avatar,
      }) => {
        return (
          <CustomUserMarker
            key={id}
            coordinate={{
              latitude: coordinates.lat,
              longitude: coordinates.lng,
            }}
            imageUrl={avatar}
            onSelect={() =>
              handleMarkerZoom(coordinates, { first_name, last_name, username })
            }
          />
        );
      }
    );
  };

  const handleMarkerZoom = useCallback((coordinates, user) => {
    Alert.alert(
      user.username,
      `Ad : ${user.first_name} - Soyad : ${user.last_name}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
    mapRef.current.animateToRegion({
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      latitudeDelta: 8, // Daha küçük bir delta daha yakın zoom sağlar
      longitudeDelta: 8,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapView ref={mapRef} provider="google" style={{ flex: 1 }}>
        {data && renderUserMarker()}
      </MapView>
      {loading && <Loading />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
