import { useSelector } from "react-redux";
import React from 'react'
import { ScrollView, View, Text } from "react-native";
import { selectAllUsers } from "../Redux/usersSlice";

const UsersList = () => {
    const users = useSelector(selectAllUsers)

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
