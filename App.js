import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Screen, { ScreenHeader, ScreenBody } from './components/Screen/Screen'
import firebase from './services/firebase'
import {Grid, Cell} from 'react-native-prueba-gaspar'
import {Title} from './components/Font/Fonts'

export default function App() {
  return <View style={{display:"flex", flexDirection:"column", flex:1}}>
    <Screen
      header={<ScreenHeader>
        <Grid direction="column" cells={[
          <Grid direction="row" cells={[
            <Cell size={1} centerVerticalAndHorizontal key={1}><Text>Back</Text></Cell>,
            <Cell size={3} centerVerticalAndHorizontal key={2}><Title>Detalles</Title></Cell>,
            <Cell size={1} key={3}></Cell>
          ]}/>,
          <Cell size={1}><View></View></Cell>
        ]}/>
      </ScreenHeader>}
      body={<ScreenBody></ScreenBody>}
    >
    </Screen>
    <StatusBar style="light" />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
