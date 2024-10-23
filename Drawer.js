import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HORARIO from './Horario';
import DatosA from './DatosA';
import 'react-native-reanimated'; 

export default class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Drawer = createDrawerNavigator();

    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Horario"
          component={HORARIO}
          initialParams={{
            codigo: this.props.route.params.codigo, 
            nip: this.props.route.params.nip,
          }}
        />
        <Drawer.Screen name="DatosA"
        initialParams={{
          codigo: this.props.route.params.codigo, 
          nip: this.props.route.params.nip,
          }}
         component={DatosA} 
         />
      </Drawer.Navigator>
    );
  }
}