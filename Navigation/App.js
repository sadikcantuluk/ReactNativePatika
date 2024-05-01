import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackApp from './src/stackNavigation/StackApp';
import StackRouting from './src/screens/StackRouting';

export default function App() {
  return (
  <StackRouting/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
