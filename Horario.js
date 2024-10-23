import React, {Component, version} from 'react';
import {View, Text, FlatList, ListItem, StyleSheet,TouchableOpacity} from 'react-native';


export default class ç extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      codigo: '',
      nip: '',
      nomalumno:"",
      datos:"",
      open: false,
    };
  }
  
  componentDidMount =  () => {

    const formdata = new FormData();
    formdata.append("codigo", this.props.route.params.codigo);//
    formdata.append("nip", this.props.route.params.nip); //
    
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
    
    fetch("http://148.202.152.33/cucei/alumnoH.php", requestOptions)
    .then(response => {
      response.json().then(parsedValue => {
         this.setState({nomalumno:parsedValue.alumno})
         this.setState({dataSource:parsedValue})
      })
  });
    
        
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text>Horario</Text>
        <Text>Alumno: {this.state.nomalumno}</Text>
      
        <FlatList
          padding={30}
          data={this.state.dataSource.horario}
          renderItem={({item}) => (
            <View style={{}}>
              <Text style={{color: 'blue'}}>{item.nombre_materia}</Text>
              <Text style={{color: 'black', marginTop: 10}}>{item.horario}</Text>
              <Text style={{color: 'green', marginTop: -20, marginLeft: 120}}>
                {item.dias}
              </Text>
              <Text style={{color: 'red', marginTop: 10}}>{item.profesor}</Text>

              <View style={{height: 1, backgroundColor: 'black'}} />
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop:0,
    
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#38C8EC",
    padding: 0
  },
  body: {
    flex: 1,
    
    backgroundColor: '#F04812'
  }
})