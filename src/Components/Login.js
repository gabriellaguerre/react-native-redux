import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import UsersList from './UsersList'

function Login({navigation}) {
  
    return (
    
       <View style={styles.main}>
        <Text style={styles.text}>
          Hello Users
        </Text>
        <View style={styles.button}>
        <Button  
          title='Add new user'
          onPress={()=> navigation.navigate('AddUserForm')}
          />
          </View>
        <UsersList /> 
      </View>
   
    )
 
}
const styles = StyleSheet.create({
    main: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    text: {
      fontSize: 30,
      margin: 10,

    },
    button: {
      margin: 10,
    }
  })

export default Login;
