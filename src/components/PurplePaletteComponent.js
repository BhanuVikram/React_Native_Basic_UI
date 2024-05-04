import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const PurplePalette = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Purple Palette</Text>

      <View style={styles.rows}>
        <View style={[styles.row, styles.rowOne]}>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={[styles.label, styles.labelLight]}>Purple</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={[styles.label, styles.labelLight]}>Dark Violet</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={[styles.label, styles.labelLight]}>Medium Orchid</Text>
          </View>
        </View>

        <View style={[styles.row, styles.rowTwo]}>
          <View style={[styles.card, styles.cardFour]}>
            <Text style={styles.label}>Magenta</Text>
          </View>
          <View style={[styles.card, styles.cardFive]}>
            <Text style={styles.label}>Orchid</Text>
          </View>
          <View style={[styles.card, styles.cardSix]}>
            <Text style={styles.label}>Violet</Text>
          </View>
        </View>

        <View style={[styles.row, styles.rowThree]}>
          <View style={[styles.card, styles.cardSeven]}>
            <Text style={styles.label}>Plum</Text>
          </View>
          <View style={[styles.card, styles.cardEight]}>
            <Text style={styles.label}>Thistle</Text>
          </View>
          <View style={[styles.card, styles.cardNine]}>
            <Text style={styles.label}>Lavender</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PurplePalette;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "indigo",
  },
  rows: {
    marginVertical: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
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
    width: 123,
    margin: 10,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowColor: "blue",
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
    marginLeft: 0,
    backgroundColor: "purple",
  },
  cardTwo: {
    backgroundColor: "darkviolet",
  },
  cardThree: {
    marginRight: 0,
    backgroundColor: "mediumorchid",
  },
  cardFour: {
    marginLeft: 0,
    backgroundColor: "magenta",
  },
  cardFive: {
    backgroundColor: "orchid",
  },
  cardSix: {
    marginRight: 0,
    backgroundColor: "violet",
  },
  cardSeven: {
    marginLeft: 0,
    backgroundColor: "plum",
  },
  cardEight: {
    backgroundColor: "thistle",
  },
  cardNine: {
    marginRight: 0,
    backgroundColor: "lavender",
  },
});
