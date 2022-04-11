import React, { Component } from 'react';
import { Text, Button } from 'react-native';

export class Componente2 extends Component {

    state = {
        qtdClicks: 0
    }
    render() {
        const { qtdClicks } = this.state;

        return (
            <>
                <Text>Quantidade de clicks: {qtdClicks}</Text>
                <Button title='Contabilizar Click' onPress={() =>
                    this.setState({ qtdClicks: qtdClicks + 1 })} />
            </>
        )
    }
}


