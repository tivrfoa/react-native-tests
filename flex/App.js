import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PizzaTranslator from './PizzaTranslator';
import Flex from './flex1';
import Touchables from './touchables';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <PizzaTranslator />
        <Touchables />
      </View>
    );
  }
}
