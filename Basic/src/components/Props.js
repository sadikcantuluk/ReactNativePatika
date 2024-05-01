import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const Props = (props) => {
  return (
    <ScrollView>
      <Text>{props.name}</Text>
    </ScrollView>
  )
}

export default Props

const styles = StyleSheet.create({})


