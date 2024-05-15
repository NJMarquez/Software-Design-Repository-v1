import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import Header from '../components/Header';

const CustomerHome = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
      <Header title="Customer Home" />
      <View style={styles.content}>
        <Text style={styles.text}>Browse Products</Text>
        <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'JosefinSans',
    color: '#dcdcdc',
  },
});

export default CustomerHome;