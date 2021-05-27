import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Screen, { ScreenHeader, ScreenBody } from './components/Screen/Screen'
import firebase from './services/firebase'

export default function App() {
  return <Screen
    header={<ScreenHeader midHeader={<Text style={{color:"white", fontWeight: "bold", alignSelf:"center", fontSize: 22, paddingTop: 20}}>Detalles</Text>}></ScreenHeader>}
    body={<ScreenBody></ScreenBody>}
  >
  </Screen>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
