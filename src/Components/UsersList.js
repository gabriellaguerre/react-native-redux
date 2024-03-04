import { useSelector, useDispatch } from "react-redux";
import React from 'react'
import { ScrollView, View, Text } from "react-native";
import { selectAllUsers, getUsersStatus, getUsersError, fetchUsers, fetchCsrfToken } from "../Redux/usersSlice";
import { useEffect } from "react";

const UsersList = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const status = useSelector(getUsersStatus)
    const error = useSelector(getUsersError)

    useEffect(()=>{
      if(status==='idle'){
        // dispatch(fetchCsrfToken())
      }
    }, [status, dispatch])
    console.log(users, "USER IN USERS LIST COMPONENT")
    const renderedUsers = users.map(user => (
        <View key={user.id}>
            <Text >{user.name} and {user.age}</Text>
        </View>
    ))
  return (
    <View>
      {renderedUsers}
    </View>
  )
}

export default UsersList;
