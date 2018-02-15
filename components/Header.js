import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export default class Header extends Component {
  render () {
    return (
      <View style={styles.header}>
        <ImageBackground
         source={require('../assets/logoshop.png')}
         style={styles.cart}
        />
        <Text style={styles.logo}>Sofwati hijab</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:{
    height: 100,
    backgroundColor: '#e25f9e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  cart: {
    width: 40,
    height: 40
  },
  logo: {
    fontSize: 20,
    marginLeft: 10,
    fontStyle: "italic",
    color: '#FFF'
  }

});