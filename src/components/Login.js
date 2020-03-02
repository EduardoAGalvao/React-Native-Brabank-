import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default class Login extends Component{

    constructor(){
        super()
        this.state = {
            email: '',
            senha: ''
        }
    }

    //Método para definir todas as ações no evento de entrada
    entrar = (e) =>{

        //O return vazio encerra a thread do código
        if(!this.validar()) return

        //Esse comando do componente Alert não funciona no navegador, somente no emulador
        //Alert.alert('Você clicou em entrar')

        //Comando alert() que funciona no navegador usando o alert nativo
        //alert(this.state.email)

        //envio dos dados para a API
    }

    //Método para definir as ações no evento de cadastro
    cadastrar = (e) =>{

        this.props.navigation.navigate('Cadastro')

    }

    validar = () =>{
        const {email, senha} = this.state
        if(!email || !senha){
            Alert.alert('Todos os campos são obrigatórios')
            alert('Todos os campos são obrigatórios')
            return false
        }else{
            return true
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.titulo}>Tela de Login</Text>
                    <TextInput style={styles.input} placeholder="Seu e-mail" onChangeText={texto => this.setState({email: texto})}/>
                    <TextInput style={styles.input} placeholder="Sua senha" onChangeText={texto => this.setState({senha: texto})}/>
                    <TouchableOpacity style={styles.button} onPress={this.entrar}>
                        <Text>ENTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.cadastrar} style={styles.button}>
                        <Text>CADASTRE-SE</Text>
                    </TouchableOpacity>
                </View>   
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