import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackApp = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackApp

const styles = StyleSheet.create({})