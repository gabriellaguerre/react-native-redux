import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import { ScrollView, View, Text } from "react-native";
import { selectAllUsers, getUsersStatus, getUsersError, fetchUsers, login } from "../Redux/usersSlice";
import { useEffect } from "react";

const ChooseActions = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectAllUsers)
  
 
  return (
    <View>
      <Text>Hello User</Text>
   
    </View>
  )
}

export default ChooseActions;
