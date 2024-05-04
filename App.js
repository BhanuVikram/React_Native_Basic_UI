import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import PurplePalette from "./src/components/PurplePalette";
import GreenPalette from "./src/components/GreenPalette";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <PurplePalette />
          <GreenPalette />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
