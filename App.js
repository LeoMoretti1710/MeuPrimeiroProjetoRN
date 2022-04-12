import React, { useState } from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';
import { Componente2 } from './src/Componente2';
import { Mensagem } from './src/Mensagem';

export default () => {

  // quero que o meu componente contabilize Clicks

  // Somente criei a varíavel e a função de altera o STATE
  const [qtdClicks, setQtdClicks] = useState(0);
  return (
    <>
      <View style={styles.tudoNoCentroColuna}>
        <Mensagem texto="Texto 1" texto2={123} />
        <Text style={styles.textoTituloVermelho}>Clicks efetuados: {qtdClicks}</Text>


        <Button title='Adicionar Click' onPress={() => setQtdClicks(qtdClicks + 1)} />


        <Componente2 />

        <View style={styles.vermelho} />
        <View style={styles.cinza} />
        <View style={styles.verde} />
      </View>
      <View style={styles.tudoNoCentroLinha}>
        <View style={styles.vermelho} />
        <View style={styles.cinza} />
        <View style={styles.verde} />
      </View>

    </>

  )
}

const styles = StyleSheet.create({
  tudoNoCentroColuna: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'

  },
  tudoNoCentroLinha: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  vermelho: {
    backgroundColor: 'red',
    width: 50,
    height: 50
  },
  cinza: {
    backgroundColor: 'grey',
    width: 50,
    height: 50
  },
  verde: {
    backgroundColor: 'green',
    width: 50,
    height: 50
  },

  textoTituloVermelho: {
    fontSize: 20,
    color: 'red',
  }
})

