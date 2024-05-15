import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

const UserProfile = () => {
  return (
    <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
      <Header title="Vinarao LPG Trading">
        <TouchableOpacity style={{backgroundColor: 'green', padding: 10, width: 60, alignSelf: 'center', borderRadius: 4,}}>
            <Text style={{fontSize: 30, fontWeight: 'bold',}}>Login</Text>
        </TouchableOpacity>
      </Header>
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

export default UserProfile;