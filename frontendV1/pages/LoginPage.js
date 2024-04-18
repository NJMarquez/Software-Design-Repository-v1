import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
      navigation.navigate("HomePage");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignupPage")}>
          <Text style={styles.signupText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;

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
    height: 300,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: "bold",
    color: "black",
  },
  input: {
    height: 40,
    borderColor: "burlywood",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginVertical: 5,
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
  },
  signupText: {
    marginTop: 10,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});