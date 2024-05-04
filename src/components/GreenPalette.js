import { StyleSheet, ScrollView, Text, View, Platform } from "react-native";
import React from "react";

const GreenPalette = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Green Palette</Text>

      <ScrollView horizontal={true} style={styles.cards}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.label}>Pale Green</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.label}>Light Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.label}>Spring Green</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style={styles.label}>Green Yellow</Text>
        </View>
        <View style={[styles.card, styles.cardFive]}>
          <Text style={styles.label}>Chartreuse</Text>
        </View>
        <View style={[styles.card, styles.cardSix]}>
          <Text style={styles.label}>Lime Green</Text>
        </View>
        <View style={[styles.card, styles.cardSeven]}>
          <Text style={styles.label}>Yellow Green</Text>
        </View>
        <View style={[styles.card, styles.cardEight]}>
          <Text style={[styles.label, styles.labelLight]}>Sea Green</Text>
        </View>
        <View style={[styles.card, styles.cardNine]}>
          <Text style={[styles.label, styles.labelLight]}>Dark Green</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default GreenPalette;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
  },
  headingText: {
    marginHorizontal: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
  cards: {
    marginVertical: 1,
    paddingVertical: 5,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 123,
    margin: 10,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  label: {
    textAlign: "center",
    color: "#333333",
  },
  labelLight: {
    color: "#cccccc",
  },
  cardOne: {
    marginLeft: 20,
    backgroundColor: "palegreen",
  },
  cardTwo: {
    backgroundColor: "lightgreen",
  },
  cardThree: {
    backgroundColor: "springgreen",
  },
  cardFour: {
    backgroundColor: "greenyellow",
  },
  cardFive: {
    backgroundColor: "chartreuse",
  },
  cardSix: {
    backgroundColor: "limegreen",
  },
  cardSeven: {
    backgroundColor: "yellowgreen",
  },
  cardEight: {
    backgroundColor: "seagreen",
  },
  cardNine: {
    marginRight: 20,
    backgroundColor: "darkgreen",
  },
});
