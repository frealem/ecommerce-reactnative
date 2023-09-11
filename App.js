import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './screens/Login';
import { Register } from './screens/Registern';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="register" component={Register} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
