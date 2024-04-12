import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import { ScrollView, View, Text } from "react-native";
import { selectAllUsers, getUsersStatus, getUsersError, fetchUsers, login } from "../Redux/usersSlice";
import { useEffect } from "react";

const UsersList = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
  
    const status = useSelector(getUsersStatus)
    const error = useSelector(getUsersError)

    useEffect(()=>{
        dispatch(login())
    }, [status, dispatch])

   
  return (
    <View>
      <Text>Hello User</Text>
   
    </View>
  )
}

export default UsersList;
