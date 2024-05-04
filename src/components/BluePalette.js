import { StyleSheet, ScrollView, Text, View, Platform } from "react-native";
import React from "react";

const BluePalette = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Blue Palette</Text>

      <View style={styles.cards}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.label}>Light Blue</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.label}>Sky Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.label}>Light Sky Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style={styles.label}>Deep Sky Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFive]}>
          <Text style={styles.label}>Dodger Blue</Text>
        </View>
        <View style={[styles.card, styles.cardSix]}>
          <Text style={styles.label}>Cornflower Blue</Text>
        </View>
        <View style={[styles.card, styles.cardSeven]}>
          <Text style={[styles.label, styles.labelLight]}>
            Medium Slate Blue
          </Text>
        </View>
        <View style={[styles.card, styles.cardEight]}>
          <Text style={[styles.label, styles.labelLight]}>Royal Blue</Text>
        </View>
        <View style={[styles.card, styles.cardNine]}>
          <Text style={[styles.label, styles.labelLight]}>Navy Blue</Text>
        </View>
      </View>
    </View>
  );
};

export default BluePalette;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
  },
  headingText: {
    marginHorizontal: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "royalblue",
  },
  cards: {
    marginVertical: 1,
    paddingVertical: 5,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    color: "white",
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
    backgroundColor: "lightblue",
  },
  cardTwo: {
    backgroundColor: "skyblue",
  },
  cardThree: {
    backgroundColor: "lightskyblue",
  },
  cardFour: {
    backgroundColor: "deepskyblue",
  },
  cardFive: {
    backgroundColor: "dodgerblue",
  },
  cardSix: {
    backgroundColor: "cornflowerblue",
  },
  cardSeven: {
    backgroundColor: "mediumslateblue",
  },
  cardEight: {
    backgroundColor: "royalblue",
  },
  cardNine: {
    backgroundColor: "navy",
  },
});
