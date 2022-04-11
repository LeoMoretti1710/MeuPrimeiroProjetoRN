import React from 'react';
import { Text } from 'react-native';

// export const Mensagem = props => (
//     <>
//     <Text>{props.texto}</Text>
//     <Text>{props.texto2}</Text>
//     </>
//     );


// Modelo Simplificado sem usar a palavra PROPS
export const Mensagem = ({texto, texto2}) => (
    <>
        <Text>{texto}</Text>
        <Text>{texto2}</Text>
    </>
);