import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "./userSlice";

export default function UserList() {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const renderUsers = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderUsers}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
