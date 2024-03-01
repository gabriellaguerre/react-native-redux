import React from 'react';
import { store } from './src/Redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Components/Home';
import AddUserForm from './src/Components/AddUserForm';

const Stack = createStackNavigator()

function App() {
    
  return (
    <NavigationContainer>
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{title:'Welcome To All Users'}}
          />
        <Stack.Screen 
          name='AddUserForm'
          component={AddUserForm}
          options={{title: 'Add New User'}}
          />

      </Stack.Navigator>
      
    </Provider>
    </NavigationContainer>
    )
  }

  
export default App;
