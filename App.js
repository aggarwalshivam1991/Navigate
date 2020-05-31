/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';

import bgImage from './images/hello.jpg'
import logo from './images/logo.png'

export default class Example extends Component {
  render() {
    return(
      <ImageBackground source = {bgImage} style = {styles.backgroundContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
          <Text> Please Start</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },

   input:{
    height:40,
    backgroundColor: '#000000'


  },

  buttonContainer: {
    width: 120,
    height: 120,
    backgroundColor: '#34495e',
  textAlign:'center',
  flex: 1,
  justifyContent: 'flex-end',
  // marginBottom: 50,
  alignItems: 'center'
  },

buttonText: {
backgroundColor: '#34495e',
color: 'white',
textAlign: 'center',
fontSize: 30,
textAlign: 'center',
fontWeight: '700',
justifyContent: 'center',
position: 'absolute',
bottom:0,
alignItems: 'center'
  }
});
