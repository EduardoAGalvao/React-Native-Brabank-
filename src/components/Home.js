import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { isSignedIn } from '../services/auth-service'

const Lancamento = (props) => {
    const lancamento = props.lancamento
    return(
        <View style={styles.viewLancamento}>
            <Text>{lancamento.tipo === 'R' ? 'Receita' : 'Despesa'}</Text>
            <Text>{lancamento.descricao}</Text>
            <Text style={{fontSize: 16}}>{lancamento.valor}</Text>
        </View>
    )
}

export default class Home extends Component{

    constructor(){
        super()
        this.state = {
            session: {},
            lancamentos: []
        }
    }

    componentDidMount = async () =>{
        
        //Coleta a situação atual da session pelo isSignedIn()
        //e seta esse dado no state
        const session = await isSignedIn()
        console.log(session)
        this.setState({session: session})

        //Geralmente isso é isolado em um doPrivateRequest
        //onde há o modelo de requests com o o token no Authorization
        const params = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                Authorization: 'Bearer ' + session.token
            }
        }

        const response = await fetch('http://10.107.144.32:3000/lancamentos', params)

        if(!response.ok){
            return console.log('erro ao buscar os lançamentos')
        }

        const lancamentos = await response.json()

        this.setState({lancamentos})
    }

    render(){

        //Coleta o dado do state
        //e verifica se possui um usuário salvo, se sim, salva-o na variável
        const {session} = this.state
        const usuario = session.usuario ? session.usuario : ''

        const lancamento = {
            descricao: 'Teste de lançamento'
        }

        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Bem Vindo a Home, {usuario.nome}!</Text>
                <Text style={styles.titulo}>Meus Lançamentos</Text>
                {
                    this.state.lancamentos.map((lancamento) => {
                        return(
                            <Lancamento key={lancamento.id} lancamento={lancamento}></Lancamento>
                        )
                    })
                }
                <Lancamento lancamento={lancamento} />
            </View>
        )
    }
}

/*Os valores numéricos da Stylesheet estão em pixel (padrão) */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
        paddingTop: 25
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
        color: '#fff'
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
    },
    viewLancamento: {
        height: 50,
        backgroundColor: '#fff',
        padding: 6,
        margin: 6
    }
})