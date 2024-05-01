import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./Welcome";
import MemberSign from "./MemberSign";
import MemberResult from "./MemberResult";

const Stack = createNativeStackNavigator();

const StackRouting = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="MemberSign" component={MemberSign} />
        <Stack.Screen name="MemberResult" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouting;

const styles = StyleSheet.create({});
