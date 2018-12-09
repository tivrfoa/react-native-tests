import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    _onPressButton() {
        Alert.alert('You tapped me.');
    }

    _dummyButton() {
        Alert.alert('TODO');
    }

    render() {
        return (
            <View style={{paddingTop: 40}}>
                <View>
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
                <View>
                    <Button
                        onPress={() => {
                            Alert.alert('You tapped the button!');
                        }}
                        title="Press me"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="Second Button"
                        color="#841584"
                    />
                </View>
                <View style={styles.rowLayout}>
                    <Button onPress={this._dummyButton} title="CANCELAR" />
                    <Button onPress={this._dummyButton} title="CONFIRMAR" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rowLayout: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    }
});