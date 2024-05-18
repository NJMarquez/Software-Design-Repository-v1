import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Alert, TouchableOpacity, Text } from 'react-native';
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
        <TouchableOpacity onPress={() => navigation.navigate('OrderHistory')} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage', { cart })} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Logout</Text>
        </TouchableOpacity>
      </Header>
      <View style={styles.tabContainer}>
        {['2.7kg', '11kg', '22kg', '50kg'].map(weight => (
          <TouchableOpacity key={weight} onPress={() => setSelectedWeight(weight)} style={styles.tabButton}>
            <Text style={styles.tabButtonText}>{weight}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {filteredTanks.map(tank => (
          <Card key={tank.id} tank={tank} addToCart={addToCart} />
        ))}
      </ScrollView>
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
    padding: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 15,
    marginTop: 60,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 500,
    width: 950,
    marginVertical: 20,
    backgroundColor: 'rgba(32, 28, 28, 0.66)',
    gap: 20,
  },
  headerButton: {
    marginHorizontal: 10,
  },
  headerButtonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'JosefinSans',
  },
  tabButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 15,
  },
  tabButtonText: {
    fontSize: 16,
    fontFamily: 'JosefinSans',
  },
  text: {
    fontSize: 30,
    fontFamily: 'JosefinSans',
    color: '#dcdcdc',
  },
});

export default CustomerHome;
