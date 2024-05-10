import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function SignupPage() {
  const navigation = useNavigation();
  const [contactNo, setContactNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleContactNoChange = (text) => {
    // Remove non-numeric characters from the input
    const formattedText = text.replace(/[^0-9]/g, '');
    setContactNo(formattedText);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleSignup = () => {
    // Perform signup logic here
    // For example, you can check if password and confirm password match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Continue with signup process
    navigation.navigate('LoginPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={{fontSize: 20, marginBottom: 15,}}>Create New Account</Text>
        <TextInput
          style={styles.input}
          placeholder=" Enter First Name"
        />
        <TextInput
          style={styles.input}
          placeholder=" Enter Last Name"
        />
        <TextInput
          style={styles.input}
          placeholder=" Enter User Name"
        />
        <TextInput
          style={styles.input}
          placeholder=" Enter Password"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
        />
        <TextInput
          style={styles.input}
          placeholder=" Enter Address "
        />
        <TextInput
          style={styles.input}
          placeholder=" Enter Contact No."
          keyboardType="numeric"
          value={contactNo}
          onChangeText={handleContactNoChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "burlywood",
  },
  form: {
    backgroundColor: "cornsilk",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 500,
    height: 600,
    //justifyContent: 'space-between',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: 'burlywood',
    borderWidth: 1.5,
    color: 'slategray',
    fontWeight: '600',
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: "chocolate",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: 'center',
    width: 90,
  },
  buttonText: {
    color: "cornsilk",
    fontWeight: "bold",
    alignSelf: 'center',
  },
});