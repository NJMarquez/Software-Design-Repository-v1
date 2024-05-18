import React from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../components/Header';

const Cart = () => {
  const route = useRoute();
  const { cart } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>Brand: {item.brand}</Text>
      <Text style={styles.text}>Weight: {item.weight}</Text>
      <Text style={styles.text}>Quantity: {item.quantity}</Text>
    </View>
  );

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
        <View style={styles.list}>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
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
  item: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    marginVertical: 8,
    width: '90%',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Freeman',
    color: '#201c1c',
  },
  list: {
    padding: 10,
    borderWidth: 2,
  },
});

export default Cart;