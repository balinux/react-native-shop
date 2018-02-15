import React, { Component } from 'react';
import {
    StyleSheet,
    ImageBackground
} from 'react-native';

import ImageOverlay from './ImageOverlay';

export default class Banner extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/gbr1.jpg')}
                style={styles.banner}
            >
                <ImageOverlay
                    header='- Hijab -'
                    paragraph='- berbagai koleksi hijab -'
                />
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    banner: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 200
    }
});