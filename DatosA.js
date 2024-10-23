import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import axios from 'axios';

export default class DatosA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreAlumno: "",
      materias: [],
      fotoA: "",
      codigo: props.route.params.codigo,
      nip: props.route.params.nip
    };
  }

  buscarDatos = () => {
    axios
      .get(`http://148.202.152.33/cucei/credenciales.php?codigo=${this.state.codigo}&nip=${this.state.nip}`)
      .then(response => {
        const datos = response.data;
        this.setState({
          nombreAlumno: datos.nombre,
          materias: datos.carrera
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  buscarFoto = () => {
    axios
      .get(`http://148.202.152.33/cucei/fotoA.php?codigo=${this.state.codigo}`)
      .then(response => {
        const datos = response.data;
        this.setState({ fotoA: datos });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.buscarDatos();
    this.buscarFoto();
  }

  render() {
    const { nombreAlumno, materias, fotoA } = this.state;

    return (
      <ScrollView style={{ padding: 10 }}>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          {fotoA ? (
            <Image source={{ uri: fotoA }} style={{ width: 100, height: 100,marginLeft:-290 }} />
          ) : (
            <Text>Foto no encontrada...</Text>
          )}
        </View>

        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Alumno: {nombreAlumno}
        </Text>

        {materias.map((materia, index) => (
          <View key={index} style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Ciclo de ingreso: {materia.cicloIngreso}</Text>
            <Text>Centro universitario: {materia.escuela}</Text>
            <Text>Descripción: {materia.descripcion}</Text>
            <Text>Nivel: {materia.nivelDesc}</Text>
            <Text>Último ciclo: {materia.ultimoCiclo}</Text>
            <Text>Clave: {materia.clave}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}
