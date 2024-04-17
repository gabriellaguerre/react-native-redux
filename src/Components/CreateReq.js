import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import { nanoid } from '@reduxjs/toolkit'
import { userAdded } from '../Redux/usersSlice'

function CreateReq({navigation}) {
    const dispatch =  useDispatch()
  
  
  
    return (
      <View>
        <Text style={styles.header}>Create Request Order</Text>
       
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

export default CreateReq
