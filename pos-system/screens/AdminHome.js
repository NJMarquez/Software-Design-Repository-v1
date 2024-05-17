import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import Header from '../components/Header';
import tanks from '../data'; // Assuming product data is imported from data file

const AdminHome = () => {
  const [products, setProducts] = useState(tanks); // State for managing products
  const [pendingOrders, setPendingOrders] = useState([]); // State for managing pending orders
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({ brand: '', weight: '', image: null });

  // Function to delete product by ID
  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Function to handle adding new product
  const addNewProduct = () => {
    setProducts([...products, newProduct]);
    toggleModal();
    setNewProduct({ brand: '', weight: '', image: null });
  };

  return (
    <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
      <Header title="Vinarao LPG Trading">
      <TouchableOpacity onPress={() => navigation.navigate('LoginPage')} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Logout</Text>
        </TouchableOpacity>
        </Header>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Product Listings</Text></View>
        <View style={styles.productsContainer}>
          {products.map(product => (
            <View key={product.id} style={styles.card}>
              <Text style={styles.brand}>{product.brand}</Text>
              <Text style={styles.weight}>Weight: {product.weight}</Text>
              <TouchableOpacity onPress={() => deleteProduct(product.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity onPress={toggleModal} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionTitleContainer}>
        <Text style={styles.sectionTitle}>Pending Orders</Text></View>
        {/* Render pending orders here */}
      </ScrollView>

      {/* Modal for adding new product */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Brand"
            style={styles.input}
            value={newProduct.brand}
            onChangeText={text => setNewProduct({ ...newProduct, brand: text })}
          />
          <TextInput
            placeholder="Weight"
            style={styles.input}
            value={newProduct.weight}
            onChangeText={text => setNewProduct({ ...newProduct, weight: text })}
          />
          {/* Add input for image selection if needed */}
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={toggleModal} color="red" />
            <Button title="Add Product" onPress={addNewProduct} />
          </View>
        </View>
      </Modal>
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
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerButton: {
    marginHorizontal: 10,
  },
  headerButtonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'JosefinSans',
  },
  sectionTitleContainer: {
    alignContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "black",
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "#fff",
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 40,
    width: "70%"
  },
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
  brand: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  weight: {
    fontSize: 14,
    marginBottom: 10,
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    marginLeft: 20
  },
  addButtonText: {
    fontSize: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '15%',
    marginBottom: 20,
    color: "#fff",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '15%',
    paddingTop: 50
  },
});

export default AdminHome;
