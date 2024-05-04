import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import PurplePalette from "./src/components/PurplePaletteComponent";
import GreenPalette from "./src/components/GreenPaletteComponent";
import BluePalette from "./src/components/BluePaletteComponent";

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
