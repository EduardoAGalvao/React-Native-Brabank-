import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';

export default class Home extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text>Bem Vindo a Home, {this.props.nome}!</Text>
            </View>
        )
    }
}

/*Os valores numéricos da Stylesheet estão em pixel (padrão) */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        justifyContent: 'center'
    },
    form: {
        margin: 16,
        backgroundColor: '#990',
        padding: 16,
        borderRadius: 10
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    input: {
        marginTop: 8,
        alignSelf: 'stretch',
        padding: 8,
        backgroundColor: 'white',
        fontSize: 16,
        borderRadius: 8
    },
    button: {
        height: 42,
        marginTop: 16,
        padding: 8,
        alignSelf: 'stretch',
        alignItems: 'center',
        borderRadius: 8,
        borderColor: '#222',
        borderWidth: 2
    }
})