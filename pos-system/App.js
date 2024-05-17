import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import AdminHome from './screens/AdminHome';
import CustomerHome from './screens/CustomerHome';
import Login from './screens/LoginPage';
import UserProfile from './screens/UserProfile';
import Cart from './screens/CartPage';
import Checkout from './screens/CheckoutPage';
import OrderHistory from './screens/OrderHistory';
import CreateUser from './screens/CreateUser';

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'Kanit': require('./assets/fonts/Kanit-Regular.ttf'),
    'JosefinSans': require('./assets/fonts/JosefinSans-Regular.ttf'),
    'Freeman': require('./assets/fonts/Freeman-Regular.ttf'),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CustomerHome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="CustomerHome" component={CustomerHome} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="CartPage" component={Cart} />
        <Stack.Screen name="CheckoutPage" component={Checkout} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="CreateUser" component={CreateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
