import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import Header from '../components/Header';

const UserProfile = ({ navigation }) => {
  const [username, setUsername] = useState('currentUsername'); // Replace with actual current value
  const [name, setName] = useState('currentName'); // Replace with actual current value
  const [password, setPassword] = useState(''); // Password should not be pre-filled
  const [mobileNumber, setMobileNumber] = useState('currentMobileNumber'); // Replace with actual current value
  const [address, setAddress] = useState('currentAddress'); // Replace with actual current value
  const [isModified, setIsModified] = useState(false);

  useEffect(() => {
    // Logic to populate the fields with current user data
    // For example, you could fetch the data from an API and set the state variables
  }, []);

  const handleUpdate = () => {
    // Handle the update logic here
    console.log('Updated Information:', { username, name, password, mobileNumber, address });
  };

  const handleReset = () => {
    // Handle the reset logic here
    setUsername('currentUsername'); // Reset to actual current value
    setName('currentName'); // Reset to actual current value
    setPassword('');
    setMobileNumber('currentMobileNumber'); // Reset to actual current value
    setAddress('currentAddress'); // Reset to actual current value
    setIsModified(false);
    console.log('Form Reset');
  };

  const handleInputChange = (setter) => (value) => {
    setter(value);
    setIsModified(true);
  };

  return (
    <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
      <Header title="Vinarao LPG Trading">
        <TouchableOpacity onPress={() => navigation.navigate('CartPage')} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OrderHistory')} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CustomerHome')} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Logout</Text>
        </TouchableOpacity>
      </Header>
      <View style={styles.viewContent}>
        <View style={styles.content}>
          <Text style={styles.profileText}>User Profile</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={handleInputChange(setUsername)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={handleInputChange(setName)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={handleInputChange(setPassword)}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              value={mobileNumber}
              onChangeText={handleInputChange(setMobileNumber)}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={address}
              onChangeText={handleInputChange(setAddress)}
              multiline
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.updateButton, !isModified && styles.disabledButton]}
              onPress={handleUpdate}
              disabled={!isModified}
            >
              <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>
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
  viewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'grey',
    color: 'black',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 50,
  },
  updateButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  updateButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  profileText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  headerButton: {
    marginHorizontal: 10,
  },
  headerButtonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'JosefinSans',
  },
  disabledButton: {
    backgroundColor: 'grey',
  },
});

export default UserProfile;