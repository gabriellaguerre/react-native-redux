import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import { ScrollView, View, Text } from "react-native";
import { selectAllUsers, getUsersStatus, getUsersError, fetchUsers } from "../Redux/usersSlice";
import { useEffect } from "react";

const UsersList = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const status = useSelector(getUsersStatus)
    const error = useSelector(getUsersError)

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [status, dispatch])

   console.log(users, "USERS")
  return (
    <View>
      {users.map(user => (
        <View key={user.id}>
            <Text >{user.employeeID} is {user.accessLevel}</Text>
        </View>
    ))}
   
    </View>
  )
}

export default UsersList;
