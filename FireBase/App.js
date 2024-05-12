import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import Read from "./src/screens/Read";
import AddItem from "./src/screens/AddItem";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="List" component={Read}/>
        <Tab.Screen name="Add" component={AddItem}/>
      </Tab.Navigator>
    </NavigationContainer>
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
