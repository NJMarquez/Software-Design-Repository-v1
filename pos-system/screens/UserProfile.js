import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Header from '../components/Header';

const UserProfile = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleUpdate = () => {
    // Handle the update logic here
    console.log('Updated Information:', { username, name, mobileNumber, address });
  };

  const handleCancel = () => {
    // Handle the cancel logic here
    setUsername('');
    setName('');
    setMobileNumber('');
    setAddress('');
    console.log('Update canceled');
  };

  return (
    <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
      <Header title="Vinarao LPG Trading" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.profileText}>User Profile</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#aaa"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#aaa"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            placeholderTextColor="#aaa"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Address"
            placeholderTextColor="#aaa"
            value={address}
            onChangeText={setAddress}
            multiline
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
              <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  },
  content: {
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
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
  cancelButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
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
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
});

export default UserProfile;