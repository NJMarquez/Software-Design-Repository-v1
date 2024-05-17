import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

const UserProfile = () => {
  return (
    <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
      <Header title="Vinarao LPG Trading">
        <TouchableOpacity onPress={() => navigation.navigate('CartPage', { cart })} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CustomerHome')} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage', { cart })} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Logout</Text>
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
  headerButton: {
    marginHorizontal: 10,
  },
  headerButtonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'JosefinSans',
  },
});

export default UserProfile;