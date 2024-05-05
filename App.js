import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import BannerSectionComponent from "./src/components/BannerSectionComponent";
import PurplePalette from "./src/components/PurplePaletteComponent";
import GreenPalette from "./src/components/GreenPaletteComponent";
import BluePalette from "./src/components/BluePaletteComponent";
import CTASectionComponent from "./src/components/CTASectionComponent";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <BannerSectionComponent />
          <PurplePalette />
          <GreenPalette />
          <BluePalette />
          <CTASectionComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
