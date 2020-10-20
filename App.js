import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Haha from './Haha';
import ReactNativeBiometrics from 'react-native-biometrics'

// const { biometryType } = ReactNativeBiometrics.isSensorAvailable()
 
 
export default function App() {
  console.log(ReactNativeBiometrics)
  return (
    <View style={styles.container}>
      <Text>Hello Weird World!</Text>
      <StatusBar style="auto" />
      <Haha />
    </View>
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
