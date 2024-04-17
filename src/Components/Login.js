import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, TextInput, Image, Alert, TouchableOpacity} from 'react-native'
import { login } from '../Redux/usersSlice'
import { useDispatch } from 'react-redux'

function Login({navigation}) {
  const dispatch = useDispatch()
 

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
        // console.log(result, 'oooooooooooooooooooo')
        
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
            placeholder='enter your employeeID'
            onChangeText={(value)=> setEmployeeID(value)}
            />
         <TextInput 
            style={styles.input}
            placeholder='enter your password'
            secureTextEntry={true}
            onChangeText={(value)=> setPassword(value)}/>
        <TouchableOpacity style={styles.loginButton} onPress={()=>handleSubmit()}>
            <Text style={styles.loginText}>Login</Text>
         </TouchableOpacity> 
        
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
      fontSize: 20,
      marginBottom: 10,
      paddingLeft: 10,
  },
  ivyText: {
    color: 'white',
    margin: 15,
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
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  loginButton: {
    margin: 20,
    backgroundColor: 'rgb(137, 206, 206)', 
    borderRadius: 20,
  },
  loginText: {
    fontSize: 20,
    color: 'rgb(0, 0, 73)',
    margin: 20,
    fontWeight: 'bold',
  },

  })

export default Login;
