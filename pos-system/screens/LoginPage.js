import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity, TextInput } from 'react-native';
import Header from '../components/Header';

const Login = () => {
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [showAdminForm, setShowAdminForm] = useState(false);

  return (
    <ImageBackground source={require('../assets/bgilpg.png')} style={styles.background}>
      <Header title="Vinarao LPG Trading"/>
      <View style={styles.formContainer}>
        <View style={styles.accountType}>
          <Text style={{ fontFamily: 'Freeman', fontSize: 40, color: '#E95D23', alignSelf: 'center' }}>
            Select Account Type
          </Text>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              setShowCustomerForm(true);
              setShowAdminForm(false);
            }}
          >
            <Text style={styles.touchableText}>Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              setShowCustomerForm(false);
              setShowAdminForm(true);
            }}
          >
            <Text style={styles.touchableText}>Admin</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forms}>
          {showCustomerForm && (
            <View style={styles.loginForm}>
              <Text style={{fontFamily: 'Freeman', fontSize: 40, color: '#E95D23', alignSelf: 'center'}}>Customer Login</Text>
              <TextInput style={styles.input} placeholder="Username" />
              <TextInput style={styles.input} placeholder="Password" secureTextEntry />
              <TouchableOpacity onPress={() => navigation.navigate('CustomerHome')} style={{backgroundColor: 'green', padding: 10, width: 60, alignSelf: 'center', borderRadius: 4, marginBottom: 20}}>
                <Text style={styles.touchableText}>Login</Text>
              </TouchableOpacity>
              <Text style={{font: 'JosefinSans', fontWeight: 'bold', color: 'cornsilk', alignSelf: 'center'}}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('CreateUser')} style={styles.createAccountButton}>
                <Text style={styles.createAccountButtonText}>Create a New Account</Text>
              </TouchableOpacity>
            </View>
          )}
          {showAdminForm && (
            <View style={styles.loginForm}>
              <Text style={{fontFamily: 'Freeman', fontSize: 40, color: '#E95D23', alignSelf: 'center'}}>Admin Login</Text>
              <TextInput style={styles.input} placeholder="Username" />
              <TextInput style={styles.input} placeholder="Password" secureTextEntry />
              <TouchableOpacity onPress={() => navigation.navigate('AdminHome')} style={{backgroundColor: 'green', padding: 10, width: 60, alignSelf: 'center', borderRadius: 4,}}>
                <Text style={styles.touchableText}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
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
  formContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(32, 28, 28, 0.5)',
    borderWidth: 0.2,
    marginVertical: 30,
    width: 1000,
    borderRadius: 4,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 15,
  },
  accountType: {
    flex: '40%',
    backgroundColor: 'rgba(32, 28, 28, 0.8)',
    marginRight: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacity: {
    backgroundColor: '#E95D23',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    height: 60,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableText: {
    color: 'cornsilk',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  forms: {
    flex: '60%',
    backgroundColor: 'rgba(32, 28, 28, 0.8)',
    marginLeft: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginForm: {
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: 300,
    color: 'white',
    fontFamily:'Kanti',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  createAccountButton: {
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center',
  },
  createAccountButtonText: {
    color: '#E95D23',
    fontWeight: 'bold',
    fontFamily: 'JosefinSans',
  },
});

export default Login;