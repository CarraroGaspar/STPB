import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import firebase from './services/firebase'

export default function App() {
  const [user, setUser] = useState({name: "", surname: ""})

  const handleChangeText = (name, value) => {
    setUser({...user, [name]: value})
  }

  const handleTouchAgregar = () => {
    firebase.db.collection('users').add({
      name: user.name,
      surname: user.surname
    })
    .then(result => console.log(result))
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" onChangeText={text => handleChangeText("name", text)}></TextInput>
      <TextInput placeholder="Surname" onChangeText={text => handleChangeText("surname", text)}></TextInput>
      <TouchableOpacity onPress={() => handleTouchAgregar()}><Text>Agregar</Text></TouchableOpacity>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View>
        <FlatList data={firebase.db.document('users/{docId}')}/>
      </View>
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
