import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    render() {
        return (
            <View style={{paddingTop: 40}}>
                <TextInput
                    style={{height: 40, fontSize: 30}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})} />
                <Text style={{padding: 10, fontSize: 42}}>
                    {/* {this.state.text + 'zzz'} */}
                    {this.state.text.split(' ').
                        map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}