/**
 *  React native root element, here will be the context providers, the navigation and routes definitions.
 *
 * @TODO
 *  1. Create the root provider to handle the user authentication 
 *  2. Develop the navigation root for the screens
 * 
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './app/screens/Login/Login';
import Home from './app/screens/Home/Home';
import { UserProvider } from './app/contexts/UserContext';
import { RandomUsersProvider } from './app/contexts/RandomUsersContext';
import Profile from './app/screens/Profile/Profile';


// Routes definitions
export type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
  Login: undefined,
  Profile: {id:string}
};

const Stack = createNativeStackNavigator<RootStackParamList>();


function App(): JSX.Element {

  return (
   
      <UserProvider>
        <RandomUsersProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name="Login" 
                component={Login}   
                options={{
                  headerShown: false,
                }}/>
                <Stack.Screen 
                name="Home" 
                component={Home}   
                options={{
                  headerShown: false,
                }}/>
                  <Stack.Screen 
                name="Profile" 
                component={Profile}   
                options={{
                  headerShown: false,
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
        </RandomUsersProvider>
        </UserProvider>

  );
}

export default App;
