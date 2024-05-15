import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput } from 'react-native';

const Card = ({ tank, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.card}>
      <Image source={tank.image} style={styles.image} />
      <Text style={styles.brand}>{tank.brand}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(quantity)}
        onChangeText={text => setQuantity(parseInt(text) || 1)}
      />
      <Button title="Add to Cart" onPress={() => addToCart(tank, quantity)} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  brand: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    width: 50,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Card;