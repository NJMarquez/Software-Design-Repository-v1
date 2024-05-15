import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import AdminHome from './screens/AdminHome';
import CustomerHome from './screens/CustomerHome';
import LoginPage from './screens/LoginPage';

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
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="AdminHome" component={AdminHome} />
        <Stack.Screen name="CustomerHome" component={CustomerHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
