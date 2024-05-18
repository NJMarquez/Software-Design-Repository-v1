import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
//import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  /*useEffect(() => {
    // Fetch orders from the backend
    axios.get('http://your-backend-url/api/orders')  Replace with your backend URL
      .then(response => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
        <Header title="Vinarao LPG Trading" />
        <View style={styles.content}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </ImageBackground>
    );
  }*/

  return (
    <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
      <Header title="Vinarao LPG Trading">
        <TouchableOpacity onPress={() => navigation.navigate('CartPage', { cart })} style={{marginHorizontal: 10}}>
          <Text style={styles.headerButtonText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CheckoutPage')} style={{marginHorizontal: 10}}>
          <Text style={styles.headerButtonText}>Checkout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')} style={{marginHorizontal: 10}}>
          <Text style={styles.headerButtonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage', { cart })} style={{marginHorizontal: 10}}>
          <Text style={styles.headerButtonText}>Logout</Text>
        </TouchableOpacity>
      </Header>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Orders</Text></View>
      <View style={styles.scrollViewContainer}>  
        <ScrollView contentContainerStyle={styles.content}>
          {orders.map(order => (
            <View key={order._id} style={styles.card}>
              <Text style={styles.text}>Ref No: {order.ref_no}</Text>
              <Text style={styles.text}>Customer: {order.customerName}</Text>
              <Text style={styles.text}>Address: {order.customerAddress}</Text>
              <Text style={styles.text}>Contact: {order.contactNumber}</Text>
              <Text style={styles.text}>Date: {new Date(order.date).toLocaleDateString()}</Text>
              <Text style={styles.text}>Status: {order.status}</Text>
              <View style={styles.productsContainer}>
                {order.products.map((item, index) => (
                  <Text key={index} style={styles.text}>
                    {item.quantity} x {item.product.name} {/* Assuming product has a name field */}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
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
  titleContainer: {
    alignContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#fff",
  },
  scrollViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black'
  },
  headerButtonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'JosefinSans',
  },
  content: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  text: {
    fontSize: 16,
    fontFamily: 'Freeman',
    color: '#000',
    marginBottom: 5,
  },
  productsContainer: {
    marginTop: 10,
  },
});

export default OrderHistory;
