import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export const Listas = () => {

    const [data, setData] = useState([]);
    const loadData = async () => {
        try {
            const resultado = await axios.get('https://jsonplaceholder.typicode.com/posts');
            if (resultado && resultado.data) {
                setData(resultado.data);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    const render = ({ item }) => {
        return (
            <TouchableOpacity style={estilos.texto}>
                <Text>{item.body}</Text>
            </TouchableOpacity>
        );
    }
    return (<FlatList
        data={data}
        keyExtractor={({ id }) => id}
        renderItem={render} />);
}

const estilos = StyleSheet.create({
    texto: {
        backgroundColor: '#98fb98',
        padding: 10,
        margin: 10
    }
})