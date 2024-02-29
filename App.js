import React from 'react';
import { ScrollView, StyleSheet,Text, View,} from 'react-native';
import { store } from './src/Redux/store';
import { Provider } from 'react-redux';
import UsersList from './src/Components/UsersList'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

function App() {
    
  return (
    <NavigationContainer>
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{title:'Welcome To All Users'}}/>
        <Stack.Screen 
          name='AddUsers'
          component={AddUserForm}
          options={{title: 'Add New User'}}/>

      </Stack.Navigator>
      {/* <View style={styles.main}>
        <Text style={styles.text}>
          Hello Users
        </Text>
        <UsersList /> 
      </View> */}
    </Provider>
    </NavigationContainer>
    )
  }

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    text: {
      fontSize: 30,

    }
  })
export default App;
