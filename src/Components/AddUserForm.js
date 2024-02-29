import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { nanoid } from '@reduxjs/toolkit'

function AddUserForm() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleSubmit = () => {
        
    }
  
    return (
      <View>
        <Text>Your Name  and Age please</Text>
        <TextInput 
            placeholder='Enter your name'
            value={name}
            onChangeText={setName(name)}/>
         <TextInput 
            placeholder='Enter your age'
            value={age}
            onChangeText={setAge(age)}/>
        <Button 
            title='Submit'
            onPress={handleSubmit}
            />
      </View>
    )
}

export default AddUserForm
