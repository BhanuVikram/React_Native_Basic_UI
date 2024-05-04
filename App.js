import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import PurplePalette from "./src/components/PurplePalette";
import GreenPalette from "./src/components/GreenPalette";
import BluePalette from "./src/components/BluePalette";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <PurplePalette />
          <GreenPalette />
          <BluePalette />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
