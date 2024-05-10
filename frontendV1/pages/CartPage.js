// CartPage.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const items = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
  { id: 3, name: 'Item 3', price: 30 },
];

export default function CartPage() {
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Items</Text>
      <View style={styles.itemContainer}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.name}</Text>
              <Text>₱{item.price}</Text>
            </View>
          )}
        />
      </View>
      <Text style={styles.total}>Total: ${totalPrice}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginHorizontal: 260,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginHorizontal: 160,
  },
  itemContainer: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'lightcoral',
    borderWidth: 2,
    borderColor: 'black',
    marginHorizontal: 160,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginHorizontal: 160,
  },
});
