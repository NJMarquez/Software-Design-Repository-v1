import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import CartPage from '../pages/CartPage';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item, navigation) => {
    setAnchorEl(null);

    if (item === 'Logout') {
      navigation.popToTop(); // Pop all screens from the stack
      navigation.navigate('LoginPage');
    } else if (item === 'Cart') {
      navigation.navigate('CartPage');
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='CartPage'
        screenOptions={{
          headerLeft: () => null,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'cornsilk',
          },
          headerTitleStyle: {
            color: 'black',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name='LoginPage'
          component={LoginPage}
        />
        <Stack.Screen
          name='HomePage'
          component={HomePage}
          options={({ navigation }) => ({
            headerRight: () => (
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={handleClick}
                  style={styles.button}
                >
                  <Text style={styles.text}>User</Text>
                </TouchableOpacity>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={() => handleClose('', navigation)}
                >
                  <MenuItem onClick={() => handleClose('Profile', navigation)}>Profile</MenuItem>
                  <MenuItem onClick={() => handleClose('Cart', navigation)}>Cart</MenuItem>
                  <MenuItem onClick={() => handleClose('Logout', navigation)}>Logout</MenuItem>
                </Menu>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name='SignupPage'
          component={SignupPage}
        />
        <Stack.Screen
          name='CartPage'
          component={CartPage}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={handleClick}
                  style={styles.button}
                >
                  <Text style={styles.text}>User</Text>
                </TouchableOpacity>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={() => handleClose('', navigation)}
                >
                  <MenuItem onClick={() => handleClose('Profile', navigation)}>Profile</MenuItem>
                  <MenuItem onClick={() => handleClose('Cart', navigation)}>Cart</MenuItem>
                  <MenuItem onClick={() => handleClose('Logout', navigation)}>Logout</MenuItem>
                </Menu>
              </View>
            ),
            headerLeft: () => {
              if (route.name === 'CartPage') {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('HomePage')}
                    style={styles.button}
                  >
                    <Text style={styles.text}>Home</Text>
                  </TouchableOpacity>
                );
              }
              return null;
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: 'lightcoral',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'cornsilk',
    marginHorizontal: 5,
    width: 100,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
});
