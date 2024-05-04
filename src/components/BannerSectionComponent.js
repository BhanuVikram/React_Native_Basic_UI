import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const BannerSectionComponent = () => {
  return (
    <View>
      <View style={styles.wrapper}>
        <ImageBackground
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1459478309853-2c33a60058e7",
          }}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Carnival Colors</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default BannerSectionComponent;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 250,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "900",
    letterSpacing: 2,
    color: "#f4ecf7",
    textShadowColor: "rgba(171, 235, 198, 0.5)",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 30,
  },
});
