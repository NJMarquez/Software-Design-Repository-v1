import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#201c1c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#dcdcdc',
    fontSize: 25,
    fontFamily: 'Freeman',
  },
});

export default Header;