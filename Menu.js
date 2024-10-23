import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LOGIN from "./Login";
import HORARIO from "./Horario";
import DRAWER from "./Drawer"
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LOGIN" component={LOGIN}  options={{ headerShown: false }} />
          <Stack.Screen name="Horario" component={HORARIO}  options={{ headerShown: false }} />
          <Stack.Screen name="Drawer" component={DRAWER}  options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}