import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput, Image, Alert} from 'react-native'
// import UsersList from './UsersList'
import { login, getUsersStatus, getUsersError } from '../Redux/usersSlice'
import { useDispatch, useSelector } from 'react-redux'

function Login({navigation}) {
  const dispatch = useDispatch()
  const status = useSelector(getUsersStatus)
  const error = useSelector(getUsersError)

  const [employeeID, setEmployeeID] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Reset input fields when component comes into focus
      setEmployeeID('');
      setPassword('');
    });

    return unsubscribe;
  }, [navigation]);

  const handleSubmit = async () => {
  
    if(!employeeID || !password) {
      Alert.alert('Warning', 'Fields cannot be empty')
    } else {
      try {
        const result = await dispatch(login({employeeID, password}))
        console.log(result, 'oooooooooooooooooooo')
        
        if(result.meta.requestStatus === 'fulfilled'){
          setEmployeeID('')
          setPassword('')
          navigation.navigate('ChooseActions')
          
        } else {
          Alert.alert('Error', result.error.message);
        }
        
      } catch (error) {
        console.error('Login error:', error);
        Alert.alert('Error', 'Login failed. Please try again later.');
      }
    
    }
    
  }

   
    return (
     <>
      <View style={styles.main}>
        <Image 
            style={styles.logo}
            source={require('../Assets/ivy_image.png')}/> 
        <Text style={styles.ivyText}>Welcome to Ivy </Text>
       
      
        <TextInput 
            style={styles.input}
            placeholder='employeeID'
            onChangeText={(value)=> setEmployeeID(value)}
            />
         <TextInput 
            style={styles.input}
            placeholder='password'
            onChangeText={(value)=> setPassword(value)}/>
        <Button 
            title='Login'
            color= 'green'
            onPress={()=>handleSubmit()}
            />
        
      </View>
      <View style={styles.opogyView}> 
      <Text style={styles.opogyText}>powered by Opogy </Text>
      </View>
      </>
    )
 
}
const styles = StyleSheet.create({
    main: {
      flex: 1,
      alignItems: 'center',
      // justifyContent: 'center',
      // marginTop: 30,
      backgroundColor: 'rgb(0, 0, 73)'
    },
    input: {
      width: 300,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 10,
      backgroundColor: 'white',
      textAlign: 'center',
      fontSize: 20,
      marginBottom: 10,
  },
  ivyText: {
    color: 'white',
    margin: 10,
    fontSize: 20,
  },
  logo: {
    margin: 30,
  },
  opogyView: {
    alignItems: 'center',
    backgroundColor: 'rgb(0, 0, 73)'
  },
  opogyText: {
    margin: 10,
    color: 'red',
    fontSize: 10,
  }

  })

export default Login;
