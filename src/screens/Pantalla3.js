import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

const colorGroups = [
  {
    title: "Colores Acuosos",
    colors: [
      { name: "TURQUOISE", hex: "#1abc9c", image: require('../../assets/turqueza.png') },
      { name: "EMERALD", hex: "#2ecc71", image: require('../../assets/esmeralda.png') },
      { name: "PETER RIVER", hex: "#3498db", image: require('../../assets/peterrever.png') },
      { name: "AMETHYST", hex: "#9b59b6", image: require('../../assets/amatista.png') },
      { name: "WET ASPHALT", hex: "#34495e", image: require('../../assets/asfalto.png') },
      { name: "GREEN SEA", hex: "#16a085", image: require('../../assets/verde_oceano.png') },
    ],
  },
  {
    title: "Natural Colors",
    colors: [
      { name: "NEPHRITIS", hex: "#27ae60", image: require('../../assets/nefrerita.png') },
      { name: "BELIZE HOLE", hex: "#2980b9", image: require('../../assets/azul_oceano.png') },
      { name: "WISTERIA", hex: "#8e44ad", image: require('../../assets/whisteria.png') },
      { name: "MIDNIGHT BLUE", hex: "#2c3e50", image: require('../../assets/azul_de_medianoche.png') },
      { name: "SUN FLOWER", hex: "#f1c40f", image: require('../../assets/girasol.png') },
      { name: "CARROT", hex: "#e67e22", image: require('../../assets/zanaoria.png') },
    ],
  },
  {
    title: "Other Colors",
    colors: [
      { name: "ALIZARIN", hex: "#e74c3c", image: require('../../assets/zalino.png') },
      { name: "CLOUDS", hex: "#ecf0f1", image: require('../../assets/cielo.png') },
      { name: "CONCRETE", hex: "#95a5a6", image: require('../../assets/concreto.png') },
      { name: "ORANGE", hex: "#f39c12", image: require('../../assets/naranja.png') },
      { name: "PUMPKIN", hex: "#d35400", image: require('../../assets/calbaza.png') },
      { name: "POMEGRANATE", hex: "#c0392b", image: require('../../assets/granada.png') },
      { name: "SILVER", hex: "#bdc3c7", image: require('../../assets/plata.png') },
      { name: "ASBESTOS", hex: "#7f8c8d", image: require('../../assets/asbelto.png') },
    ],
  },
];

const ColorBox = ({ name, hex, image }) => (
  <View style={[styles.colorBox, { backgroundColor: hex }]}>
    <Image source={image} style={styles.image} />
    <Text style={styles.colorName}>{name}</Text>
    <Text style={styles.colorHex}>{hex}</Text>
  </View>
);

const Pantalla3 = () => {
  return (
    <ScrollView style={styles.container}>
      {colorGroups.map((group, index) => (
        <View key={index} style={styles.group}>
          <Text style={styles.groupTitle}>{group.title}</Text>
          <View style={styles.colorsContainer}>
            {group.colors.map((color, idx) => (
              <ColorBox key={idx} name={color.name} hex={color.hex} image={color.image} />
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  group: {
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorBox: {
    width: '30%',
    margin: '1.5%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  colorName: {
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    zIndex: 1,
  },
  colorHex: {
    color: '#fff',
    fontSize: 12,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    zIndex: 1,
  },
});

export default Pantalla3;