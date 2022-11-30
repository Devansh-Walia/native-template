import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <View className="flex h-full items-center justify-center">
      <Text className="text-lg font-bold ">Tab Two</Text>
      <View className="my-10 h-4 w-52 mx-10" lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}
