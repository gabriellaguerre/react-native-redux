import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Components/Login';
import UsersList from './src/Components/UsersList';

const Stack = createStackNavigator()

function App() {
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Login'
          component={Login}
          // options={{title:'Welcome To All Users'}}
          />
        <Stack.Screen 
          name='UsersList'
          component={UsersList}
          // options={{title: 'Add New User'}}
          />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }

  
export default App;
