import React, { Component } from 'react';
import { Text, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
// import AssetExample from './components/AssetExample';
import Header from './components/Header';
import Banner from './components/Banner';
import Content from './components/Content'; 
// or any pure javascript modules available in npm
// import { Card } from 'react-native-elements'; // 0.18.5

export default class App extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
          <Header />
          <Banner />
          <Content />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
