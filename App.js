import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import PurplePalette from "./src/components/PurplePalette";

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <PurplePalette />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
