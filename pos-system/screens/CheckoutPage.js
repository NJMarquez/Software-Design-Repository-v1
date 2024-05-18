import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this package installed
import Header from '../components/Header';

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleOrder = () => {
    // Add your order handling logic here
    console.log('Order Details:', {
      name,
      address,
      contactNumber,
      product,
      quantity,
    });
  };

  return (
    <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
      <Header title="Vinarao LPG Trading" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.box}>
          <View style={styles.card}>
            <Ionicons name="person-outline" size={20} color="#555" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
              placeholderTextColor="#aaa"
            />
          </View>
          <View style={styles.card}>
            <Ionicons name="location-outline" size={20} color="#555" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
              placeholderTextColor="#aaa"
            />
          </View>
          <View style={styles.card}>
            <Ionicons name="call-outline" size={20} color="#555" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Contact Number"
              value={contactNumber}
              onChangeText={setContactNumber}
              keyboardType="phone-pad"
              placeholderTextColor="#aaa"
            />
          </View>
          <View style={styles.card}>
            <Ionicons name="cube-outline" size={20} color="#555" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Product"
              value={product}
              onChangeText={setProduct}
              placeholderTextColor="#aaa"
            />
          </View>
          <View style={styles.card}>
            <Ionicons name="cart-outline" size={20} color="#555" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Quantity"
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
              placeholderTextColor="#aaa"
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  box: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#ff5722',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Checkout;
