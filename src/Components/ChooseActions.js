import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { selectAllItems, fetchItems } from '../Redux/itemsSlice'
import { selectAllUsers, logoutUser } from "../Redux/usersSlice";


const ChooseActions = ({navigation}) => {
    
    const dispatch = useDispatch()
    const user = useSelector(selectAllUsers)

    useEffect(() => {
      dispatch(fetchItems())
  }, [dispatch])
  
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
    <TouchableOpacity style={styles.poButton} onPress={()=>{navigation.navigate('Create Purchase Order')}}>
              <Text style={styles.poText}>Create Purchase Order</Text></TouchableOpacity>
   <TouchableOpacity style={styles.reqButton} onPress={()=>{navigation.navigate('Create Request Order')}}>
              <Text style={styles.reqText}>Create Request Order</Text></TouchableOpacity>
      </View>
    <View style={styles.logoutView}>
      <TouchableOpacity style={styles.logoutButton} onPress={()=>handleLogout()}>
          <Text style={styles.logoutText}>Logout</Text></TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 0, 73)'
  },
  poButton: {
    margin: 20,
    backgroundColor: 'blue', 
    borderRadius: 20,
  }, 
  poText: {
    fontSize: 20,
    color: 'white',
    margin: 20,
    fontWeight: 'bold',
  }, 
  reqButton: {
    margin: 20,
    backgroundColor: 'rgb(180, 180, 240)', 
    borderRadius: 20,
  }, 
  reqText: {
    fontSize: 20,
    color: 'rgb(76, 76, 109)',
    margin: 20,
    fontWeight: 'bold',
  }, 
  logoutView: {
    backgroundColor: 'rgb(0, 0, 73)',
    alignItems: 'center',
    
  },
  logoutText: {
    fontSize: 20,
    color: 'white',
    margin: 20,
    fontWeight: 'bold',
    // backgroundColor: 'red',
  },
  logoutButton: {
    margin: 20,
    backgroundColor: 'red', 
    borderRadius: 20,
  },
})


export default ChooseActions;
