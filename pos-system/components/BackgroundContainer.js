import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

const BackgroundContainer = ({ children }) => {
  return (
    <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
      <View style={styles.container}>
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginTop: 60,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // optional: adds a semi-transparent overlay
    padding: 20,
  },
});

export default BackgroundContainer;