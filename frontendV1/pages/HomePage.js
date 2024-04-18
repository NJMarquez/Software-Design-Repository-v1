import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

const images = [
  { uri: '../assets/lpg1.png', description: 'Petron Gasul Elite' },
  { uri: '../assets/lpg2.png', description: 'Petron Gasul Small' },
  { uri: '../assets/lpg3.png', description: 'Petron Gasul Home' },
  { uri: '../assets/lpg4.png', description: 'Petron Gasul Classic' },
  { uri: '../assets/lpg5.png', description: 'Petron Gasul Large' },
  { uri: '../assets/lpg6.png', description: 'Petron Gasul XL' },
];

const HomePage = () => {
  const renderCards = () => (
    images.map((item, index) => (
      <View key={index} style={styles.card}>
        <Image source={{ uri: item.uri }} style={styles.image} />
        <Text style={styles.description}>
          {item.description}
        </Text>
      </View>
    ))
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.row}>
          {renderCards().slice(0, 3)}
        </View>
        <View style={styles.row}>
          {renderCards().slice(3, 6)}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'burlywood',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 100,
  },
  card: {
    width: 300,
    height: 300,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'cornsilk',
    alignItems: 'center',
    marginVertical: 100,
    borderWidth: 1,
    borderColor: 'chocolate',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
  },
  description: {
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomePage;