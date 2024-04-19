import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import Login from './src/Components/Login';
import ChooseActions from './src/Components/ChooseActions';
import CreatePO from './src/Components/CreatePO';
import CreateReq from './src/Components/CreateReq';
=======
import Home from './src/Components/Home';
import AddUserForm from './src/Components/AddUserForm';
import { fetchUsers } from './src/Redux/usersSlice';

store.dispatch(fetchUsers())
>>>>>>> origin/createPO

const Stack = createStackNavigator()

function App() {
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{ headerShown: false }}
          />
        <Stack.Screen 
          name='ChooseActions'
          component={ChooseActions}
          options={{ headerShown: false }}
          />
        <Stack.Screen 
          name='Create Purchase Order'
          component={CreatePO}
          // options={{ headerShown: false }}
          />
        <Stack.Screen 
          name='Create Request Order'
          component={CreateReq}
          // options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }

  
export default App;
