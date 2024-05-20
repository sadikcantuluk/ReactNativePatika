import { ActivityIndicator, Text, View } from 'react-native'
import React from 'react'
import styles from "./Loading.style"

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="blue"/>
    </View>
  )
}
