import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Header from '../components/Header';

const Checkout = () => {
  return (
    <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
      <Header title="Vinarao LPG Trading" />
      <View style={styles.content}>
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Freeman',
    color: 'white',
  },
});

export default Checkout;