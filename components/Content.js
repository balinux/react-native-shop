import React, { Component } from 'react';
import {StyleSheet, Image, View, Text } from 'react-native';

import CustomImage from './CustomImage'

export default class Content extends Component {
  render () {
    return (
      <View style={styles.contentContainer}>

        <View style={styles.col2}>
          <CustomImage 
              imageSource={require('../assets/gbr2.jpg')}
              header='Tas'
           />
        </View>
      
        <View style={styles.col1}>
          <CustomImage 
              imageSource={require('../assets/gbr3.jpg')} 
               header='Sepatu'
              />
        </View>
      
        <View style={styles.contentBanner}>
          <CustomImage 
              imageSource={require('../assets/gbr4.jpg')}
              header='Couple'
              paragraph='Koleksi couple'
           />
        </View>
      
        <View style={styles.col1}>
          <CustomImage 
              imageSource={require('../assets/gbr3.jpg')}
              header='sepatu'
           />
        </View>

         <View style={styles.col2}>
          <CustomImage 
              imageSource={require('../assets/gbr2.jpg')}
              header='Tas'
           />
        </View>

        </View>
    );
  }
}
 

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 1
  },
  col1: {
    flex:1,
    padding:1
  },
  col2: {
    flex: 2,
    padding: 1
  },
  contentBanner: {
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
    padding:1
  }
});