import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class Flex extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          {/* <Text>Open up App.js to start working on your app!</Text> */}
          <View style={{flex: 1, backgroundColor: 'powderblue'}}>
            <Text>Banco do Brasil</Text>
          </View>
          <View style={{flex: 2, backgroundColor: 'skyblue'}}>          
          </View>
          <View style={{flex: 3, backgroundColor: 'steelblue'}}>
          </View>        
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // flexDirection: 'row',
      // backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });