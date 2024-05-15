import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title, children }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttons}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#201c1c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'Kanit',
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default Header;
