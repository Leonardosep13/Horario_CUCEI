import React, {Component} from 'react';
import {View, Text, Image, TextInput, Button} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: '',
      nip: '',
    };
  }

  render() {
    const login = () => {
      console.log('entro');
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          
          if (!xhttp.responseText === '0') {
            //error
          } else {
            _this.props.navigation.navigate('Drawer',{codigo:_this.state.codigo,nip:_this.state.nip});
          }
        }
      };
      xhttp.open(
        'GET',
        'http://148.202.152.33/cucei/credenciales.php?codigo=' +
          this.state.codigo +
          '&nip=' +
          this.state.nip,
        true,
      );
      xhttp.send();
    };

    return (
      <View>
        <View
        style={{
            marginTop:5,
            width:30,
            height:30,
            borderWidth:100,
            alignSelf:'center',
            marginTop:50,
        }}>
            <Image
                style={{
                    marginTop:5,
                    width:30,
                    height:30,
                    borderWidth:100,
                    alignSelf:'center',
                    marginTop:-100,}}
               source={require('./logo.png')} 
            />
        </View>

        <View
        style={{
            alignSelf:'center',
            marginTop:30,
            borderRadius:15,
            borderColor:'black',
            borderWidth:2,
            width:150
        }}>
            <TextInput
                placeholder='Codigo de alumno'
                keyboardType='numeric'
                onChangeText={codigo => this.setState({codigo})}
            >
            </TextInput>
        </View>

        <View
        style={{
            alignSelf:'center',
            marginTop:30,
            borderRadius:15,
            borderColor:'black',
            borderWidth:2,
            width:150
        }}>
            <TextInput
                secureTextEntry={true}
                placeholder='Nip'
                onChangeText={nip => this.setState({nip})}
            >
            </TextInput>
        </View>

        <View
        style={{
            alignSelf:'center',
            marginTop:30,
            borderRadius:15,
            borderColor:'black',
            width:150
        }}>
            <Button title='Ingresar' color={'black'} onPress={login}></Button>
        </View>


      </View>
    );
  }
}
