import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SecondScreen = (props) => {

    //Gelen verinin alınması.

    // const userName = props.route.params.userName;
              //VEYA
    const {userName} = props.route.params; //params'dan userName objesini direkt çekme.

    const handlePress = () => {
        props.navigation.goBack("First");
      };
  return (
    <View>
      <Text>Second Screen Hello</Text>
      <Button title='First Geri Dön' onPress={handlePress}/>
      <Text>{userName}</Text>
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({})






