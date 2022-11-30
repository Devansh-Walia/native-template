import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

import { Text, View } from "../components/Themed";

export default function ModalScreen() {
  return (
    <View className="flex h-full items-center justify-center">
      <Text className="text-lg font-bold ">Modal</Text>
      <View className="my-32 h-4 w-32" lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
