import React, {useState} from "react";
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

export const Login = () => {

    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');

    const efetuarLogin = () =>{
        Alert.alert(`Você digitou o e-mail: ${email} e a senha ${senha}` );
    }
    return (
        <View style={estilo.container}>
            <TextInput
                style={estilo.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu E-mail"
            />
            <TextInput
                style={estilo.input}
                value={senha}
                onChangeText={setSenha}
                placeholder="Digite sua senha"
                secureTextEntry={true}
            />
            <TouchableOpacity style= {estilo.button} onPress={efetuarLogin}>
                <Text style={estilo.buttonText}>
                    Entrar
                </Text>
            
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: '10%'
    },

    button: {
        backgroundColor: '#027333',
        width: '80%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%'

    },
    buttonText:{
        color: 'white',
        fontSize: 16 
    }
});
