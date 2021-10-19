import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './src/Components/Welcome';
import QRCodeScanner from "./src/Components/QRCodeScanner";
import Login from "./src/Components/AccountsEntry";
import Signup from "./src/Components/RegistrationHome";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Scanner" component={QRCodeScanner} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
