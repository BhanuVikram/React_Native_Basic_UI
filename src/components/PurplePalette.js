import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PurplePalette = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Purple Palette</Text>

      <View style={styles.rows}>
        <View style={[styles.row, styles.rowOne]}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Purple</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>Dark Violet</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Medium Orchid</Text>
          </View>
        </View>

        <View style={[styles.row, styles.rowTwo]}>
          <View style={[styles.card, styles.cardFour]}>
            <Text>Magenta</Text>
          </View>
          <View style={[styles.card, styles.cardFive]}>
            <Text>Orchid</Text>
          </View>
          <View style={[styles.card, styles.cardSix]}>
            <Text>Violet</Text>
          </View>
        </View>

        <View style={[styles.row, styles.rowThree]}>
          <View style={[styles.card, styles.cardSeven]}>
            <Text>Plum</Text>
          </View>
          <View style={[styles.card, styles.cardEight]}>
            <Text>Thistle</Text>
          </View>
          <View style={[styles.card, styles.cardNine]}>
            <Text>Lavender</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PurplePalette;

const styles = StyleSheet.create({
  headingText: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "indigo",
  },
  wrapper: {
    marginVertical: 10,
  },
  rows: {
    marginVertical: 2,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  rowOne: {
    paddingTop: 5,
    paddingBottom: 0,
  },
  rowTwo: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  rowThree: {
    paddingTop: 0,
    paddingBottom: 5,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    weight: 100,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    color: "indigo",
  },
  cardOne: {
    backgroundColor: "purple",
  },
  cardTwo: {
    backgroundColor: "darkviolet",
  },
  cardThree: {
    backgroundColor: "mediumorchid",
  },
  cardFour: {
    backgroundColor: "magenta",
  },
  cardFive: {
    backgroundColor: "orchid",
  },
  cardSix: {
    backgroundColor: "violet",
  },
  cardSeven: {
    backgroundColor: "plum",
  },
  cardEight: {
    backgroundColor: "thistle",
  },
  cardNine: {
    backgroundColor: "lavender",
  },
});
