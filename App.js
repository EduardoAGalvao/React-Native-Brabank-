import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/components/Index'

export default class App extends Component{
  render(){
    /* 
      -> O return() sempre retorna um único componente
      -> O View é um componente limpo, como uma div
    */
    return (
        <Index />
    )
  }
}

const styles = StyleSheet.create({
  /*
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    flex: 1,
    minHeight: 100,
    backgroundColor: '#555',
    padding: 5,
    marginTop: 5,
    color: 'white'
  }*/
});
