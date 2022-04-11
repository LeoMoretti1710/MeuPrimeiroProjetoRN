import React from 'react';
import {Text, TouchableOpacity, FlatList} from 'react-native';

export const Listas = () => {
    const usuarios = [
        {id:1, nome: 'Rafael'},
        {id:2, nome: 'Wildo'},
        {id:3, nome: 'Naira'},
        {id:4, nome: 'Marcelo'},
        {id:5, nome: 'Felipe'},
        {id:6, nome: 'Leonardo'},
        {id:7, nome: 'Yuri'},
        {id:8, nome: 'Rafael'},
        {id:9, nome: 'Lucas'},
    ];

   const render = ({item}) => {
       return(
          <TouchableOpacity>
              <Text>{item.nome}</Text>
          </TouchableOpacity>
       );
   }
   return (<FlatList
    data={usuarios}
    keyExtractor={({id}) => id} 
    renderItem={render} />);
}