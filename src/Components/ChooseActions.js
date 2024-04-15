import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import { selectAllUsers, logoutUser } from "../Redux/usersSlice";
import { useEffect } from "react";

const ChooseActions = ({navigation}) => {
    
    const dispatch = useDispatch()
    const user = useSelector(selectAllUsers)
  
    const handleLogout = () => {
      dispatch(logoutUser());
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}]
      })
    }


  return (
    <>
    <View style={styles.main}>
      <Text>Hello User</Text>
      </View>
    <View>
      <Button 
            title='Logout'
            color= 'red'
            onPress={()=>handleLogout()}
            />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(0, 0, 73)'
  },
})


export default ChooseActions;
