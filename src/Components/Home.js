import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import UsersList from './UsersList'
import AddUserForm from './AddUserForm'

function Home({navigation}) {
  
    return (
    
       <View style={styles.main}>
        <Text style={styles.text}>
          Hello Users
        </Text>
        <Button 
          title='Add new user'
          onPress={()=> navigation.navigate('AddUserForm')}/>
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

    }
  })

export default Home;
