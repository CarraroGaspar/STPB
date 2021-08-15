import React from 'react'
import { View, Text } from 'react-native'
import Screen, { ScreenBody, ScreenHeader } from './components/Screen/Screen'
import { Grid, Cell } from 'react-native-simple-layout-grid'

export default function App() {
  return <Screen 
    body={<ScreenBody>
      <Grid cells={[
        <Cell key={1} ><Text>Hola</Text></Cell>
      ]}></Grid>
    </ScreenBody>} 
    header={<ScreenHeader></ScreenHeader>} 
  />
}