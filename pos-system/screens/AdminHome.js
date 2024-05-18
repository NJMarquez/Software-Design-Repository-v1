import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import tanks from '../data'; // Assuming product data is imported from data file

const AdminHome = () => {
  const [products, setProducts] = useState(tanks); // State for managing products
  const [pendingOrders, setPendingOrders] = useState([]); // State for managing pending orders
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({ brand: '', weight: '', image: null });
  const navigation = useNavigation();

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
            <Text style={{fontSize:30}}>+</Text>
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
            <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>  
            <Text style={styles.modalTextButton}>Cancel</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={addNewProduct}>
            <Text style={styles.modalTextButton}>Add Product</Text> 
            </TouchableOpacity>
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
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 5,
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#fff",
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 40,
    width: "60%"
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
  modalTextButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  modalButton: {
    backgroundColor: '#E95D23',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'papayawhip',
    width: 700,
    height: 400,
    alignSelf: "center",
    marginTop: 120,
    borderRadius: 10,
  },
  input: {
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '25%',
    marginBottom: 20,
    color: "black",
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 30,
    gap: 20,
  },
});

export default AdminHome;
