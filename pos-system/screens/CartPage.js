import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const Cart = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [cart, setCart] = useState(route.params.cart);

  const deleteItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.item}>
        <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(item.id)}>
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Brand: {item.brand}</Text>
        <Text style={styles.text}>Weight: {item.weight}</Text>
        <Text style={styles.text}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  const handleCheckout = () => {
    navigation.navigate('CheckoutPage', { cart });
  };

  return (
    <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
      <Header title="Vinarao LPG Trading">
        <TouchableOpacity onPress={() => navigation.navigate('CustomerHome', { cart })} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Home</Text>
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
      <View style={styles.content}>
        <View style={styles.flatlistcon}>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.list}
            numColumns={3}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
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
    width: 500,
    alignContent: 'center',
    backgroundColor: 'rgba(20 , 19, 14, 0.6)',
    borderRadius: 2,
    marginVertical: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    alignContent: 'flex-start',
    width: 90,
    height: 120,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    position: 'relative',
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#ff5722',
    borderRadius: 10,
    padding: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Freeman',
    color: '#201c1c',
  },
  list: {
    padding: 10,
    alignItems: 'center',
    marginRight: 5,
  },
  headerButton: {
    marginLeft: 10,
    padding: 10,
  },
  headerButtonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'JosefinSans',
  },
  checkoutButton: {
    alignSelf: 'center',
    width: 300,
    backgroundColor: '#ff5722',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  checkoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  flatlistcon: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    borderWidth: 5,
    height: 530,
    borderRadius: 2,
  },
});

export default Cart;
