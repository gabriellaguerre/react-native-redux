import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Components/Login';
import ChooseActions from './src/Components/ChooseActions';

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
      </Stack.Navigator>
    </NavigationContainer>
    )
  }

  
export default App;
