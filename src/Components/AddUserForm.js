import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import { nanoid } from '@reduxjs/toolkit'
import { userAdded } from '../Redux/usersSlice'

function AddUserForm({navigation}) {
    const dispatch =  useDispatch()
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    // const handleSubmit = () => {
    //     if(name && age){
    //       dispatch(userAdded(name, age))
    //       setName('')
    //       setAge('')
    //       navigation.navigate("Home")
    //     } else {
    //       Alert.alert('Error', 'Please fill out the form')
    //     }
    // }
  
    return (
      <View>
        <Text style={styles.header}>Your Name  and Age please</Text>
        <TextInput 
            style={styles.input}
            placeholder='Enter your name'
            value={name}
            onChangeText={name => setName(name)}/>
         <TextInput 
            style={styles.input}
            placeholder='Enter your age'
            value={age}
            onChangeText={age => setAge(age)}/>
        <View style={styles.button}>
        <Button
            color='red' 
            title='Submit'
            // onPress={handleSubmit}
            />
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 15,
  },
  input: {
    backgroundColor: 'white',
    margin: 10,
  },
  button: {
    width: 100,
    alignSelf:'center',
    margin: 10,
    backgroundColor: 'green'
  }
})

export default AddUserForm
