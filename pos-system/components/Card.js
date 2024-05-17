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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 15,
    height: 340,
    width: 200,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  brand: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    padding: 5,
    width: 50,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Card;