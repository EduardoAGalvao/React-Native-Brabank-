import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import {cadastrar as cadastrarUsuario} from '../services/auth-service'

export default class Cadastro extends Component{

    constructor(){
        super()
        this.state = {
            email: '',
            senha: ''
        }
    }

    //Método para definir as ações no evento de cadastro
    cadastrar = async (e) =>{

        //Se não estiver validado, para o código com o return
        if(!this.validar()) return

        //Recebendo os dados do state (email e senha) na variável usuário
        const usuario = this.state

        //Deixando parâmetros fixos que não estão no state
        usuario.nome = 'Roberto Silva do Teste',
        usuario.sexo = 'M',
        usuario.cpf = '15989669856'

        try{
            const response = await cadastrarUsuario(usuario)

            //O atributo ok é retornado quando o status está entre 200 e 299
            if(!response.ok){
                return Alert.alert('Erro ao cadastrar')
            }

            Alert.alert('Cadastrado com sucesso')

        }catch(erro){
            console.log(erro)
        }

        //Refatorado em 03/03, quando criados arquivos doRequest e auth-service
        //Atribuindo somente o body() do retorno da requisição para as respectivas variáveis transformando em json(), ele vem em texto do http
        //const { usuario, token } = await retorno.json()
    
        //Refatorado em 03/03, quando criados arquivos doRequest e auth-service
        //Criação de um espaço no webStorage para armazenar o token retornado
        //AsyncStorage.setItem('token', token)

        //Redirecionar o usuário para o caso de ter gravado as informações
        this.props.navigation.navigate('Home')

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
                    <Text style={styles.titulo}>É bom receber você ^^</Text>
                    <TextInput style={styles.input} placeholder="Seu e-mail" onChangeText={texto => this.setState({email: texto})}/>
                    <TextInput style={styles.input} placeholder="Sua senha" onChangeText={texto => this.setState({senha: texto})}/>
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