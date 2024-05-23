import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ColorBox = ({ name, code, image }) => {
  return (
    <View style={[styles.box, { backgroundColor: code }]}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.boxText}>{name}</Text>
      <Text style={styles.boxCode}>{code}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  boxCode: {
    color: 'white',
  },
});

export default ColorBox;

