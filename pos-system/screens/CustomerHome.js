import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Button, ScrollView, Alert, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import tanks from '../data';
import Card from '../components/Card';

const CustomerHome = () => {
  const [selectedWeight, setSelectedWeight] = useState('2.7kg');
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();

  const filteredTanks = tanks.filter(tank => tank.weight === selectedWeight);

  const addToCart = (tank, quantity) => {
    setCart([...cart, { ...tank, quantity }]);
    Alert.alert(`${tank.brand} added to cart`, `Quantity: ${quantity}`);
  };

  return (
    <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
      <Header title="Vinarao LPG Trading">
        <TouchableOpacity onPress={() => navigation.navigate('CartPage', { cart })} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UserPage')} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>User</Text>
        </TouchableOpacity>
      </Header>
      <View style={styles.tabContainer}>
        {['2.7kg', '11kg', '22kg', '50kg'].map(weight => (
          <Button key={weight} title={weight} onPress={() => setSelectedWeight(weight)} />
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {filteredTanks.map(tank => (
          <Card key={tank.id} tank={tank} addToCart={addToCart} />
        ))}
      </ScrollView>
      <Button title="Go to Cart" onPress={() => navigation.navigate('CartPage', { cart })} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    gap: 10,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  headerButton: {
    marginHorizontal: 10,
  },
  headerButtonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'JosefinSans',
  },
  text: {
    fontSize: 30,
    fontFamily: 'JosefinSans',
    color: '#dcdcdc',
  },
});

export default CustomerHome;