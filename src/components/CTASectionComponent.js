import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  Platform,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

const CTASectionComponent = () => {
  function openLink(link) {
    Linking.openURL(link);
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.headingText}>Talk to us!</Text>
        <Image
          style={styles.cardImage}
          source={require("../assets/images/leaves.png")}
        ></Image>
        <View style={styles.cardHead}>
          <Text style={styles.cardText} numberOfLines={2}>
            Book a free consultation with us and we will help you decide your
            colors...
          </Text>
        </View>
        <View style={styles.cardFoot}>
          <TouchableOpacity
            style={[styles.link, styles.linkOne]}
            onPress={() => openLink("https://github.com/BhanuVikram")}
          >
            <Text style={styles.linkText}>Book Now!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.link, styles.linkTwo]}
            onPress={() => openLink("https://www.linkedin.com/in/bhanuvikram/")}
          >
            <Text style={styles.linkText}>Call Us!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CTASectionComponent;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
  },
  headingText: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#d68910",
  },
  card: {
    paddingBottom: 20,
    backgroundColor: "#fbeee6",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardHead: {
    marginHorizontal: 20,
  },
  cardText: {
    marginHorizontal: 10,
    fontSize: 22,
    fontWeight: "500",
    color: "#d68910",
    textShadowColor: "rgba(235, 152, 78, 0.3)",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 25,
  },
  cardFoot: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: 40,
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 10,
    backgroundColor: "#edbb99",
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
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 3,
      },
    }),
  },
  linkOne: {
    marginLeft: 60,
  },
  linkTwo: {
    marginRight: 60,
  },
  linkText: {
    fontSize: 17,
    fontWeight: "500",
    color: "#cd6155",
  },
});
